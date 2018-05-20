var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      var filename = file.originalname;
      var filenameparts = filename.split('.');
      cb(null, file.fieldname + '-' + Date.now() + '.' +filenameparts[1])
    }
  });
var upload = multer({ storage: storage }).single('files');
// console.log(storage);
// console.log(upload);

mongoose.connect("mongodb://localhost/meanmongoose");
//console.log(mongoose.connection.readyState);
var User = require('./models/user');
var Adminuser = require('./models/adminuser');

// Passport configure

router.use(require("express-session")({
    secret:"Roami is the cutest puppy",
    resave: false,
    saveUninitialized : false
}));

router.use(passport.initialize());
router.use(passport.session());
// passport.use(new LocalStrategy(Adminuser.authenticate()));
// passport.serializeUser(Adminuser.serializeUser());
// passport.deserializeUser(Adminuser.deserializeUser());




let response = {
    status:200,
    message:null,
    data:[]

}

var sendError  = (err,res)=> {
    response.status = 501 ;
    response.message = typeof err == "object" ? err.message : err ;
    res.status(501).json(response);
}






router.post('/adduser', upload, (req,res)=>{
     //console.log(req.file)
   // var filepath = req.file.destination.substr(7) + '/' + req.file.filename;
    var user_name = req.body.name;
    var user_addr = req.body.address;
    //console.log(filepath);
    var userobj = {name:user_name,address:user_addr};
    User.create(userobj, (err,adduserfrm)=>{
        if(err) res.send('err');
        response.data = adduserfrm;
        res.json(response);
        console.log(response)
        res.redirect('/users');
    })
});



router.get('/users', (req,res)=>{
    //db.getCollection('user').find({})
    User.find({}, (err,user)=>{
        if(err) res.send('err');
        response.data = user;
        res.json(response);
    });
});

router.get('/edituser/:id',(req,res)=>{
        let id = req.params.id;
        //console.log(id);
    User.findById(id,(err,selected)=>{
        if(err) res.send('err');
        response.data = selected;
        res.json(response);
        //console.log(response);
        
    })

});

router.put('/updateuser/:id',(req,res)=>{

    let uid = req.params.id;
    var user_name = req.body.name;
    var user_addr = req.body.address;

    var userobj = {name:user_name,address:user_addr};
    User.findByIdAndUpdate(uid,userobj,(err,updated)=>{
        if(err) res.send('err');
        //response.data = updated;
        res.redirect('/users');
    })

});

router.delete('/deleted/:id',(req,res)=>{
    let removeid = req.params.id ;
    //console.log(removeid);
    User.findByIdAndRemove(removeid,(err,removed)=>{
        if(err) res.send('err');
        response.data = removed;
        res.json(response);
        
    });
    //res.redirect('/users');
});



router.post('/registration', (req,res)=>{
    var newAdmin = new Adminuser({email:req.body.email,password:req.body.password});
        console.log('Api=' + newAdmin);
        
    Adminuser.createUser(newAdmin,(err,admin)=>{
        if(err) res.send('err');
        // response.data = admin;
        // res.json(response);
         console.log(admin);
        // passport.authenticate("local")(req,res, function(){
           
        // })
    })
    res.redirect("/users");
})

passport.use(new LocalStrategy(
    function(email, password, done) {
        Adminuser.getemailByEmail(email, function(err,email){
          if(err) throw err;
          if(!email){
              return done(null, false);
          }
          Adminuser.comparePassword(password,email.password, function(err, isMatch){
              if(err) throw err;
          if(isMatch){
              return done(null, email);
          }else {
              return done(null, false);
          }
      });
      });
        
  }));

passport.serializeUser(function(email,done){
	done(null, email.id);
});

passport.deserializeUser(function(id,done){
	Adminuser.getemailById(id, function(err,email){
		done(err,email);
	});
});

router.post('/logedin', 
	passport.authenticate('local',{successRedirect:'/vdhcvdjsc'})
	,function(req, res){
		//var username=new User({username:req.body.username});
		res.redirect('/vdhcvdjsc');
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/logedin");
}


router.use(function(req,res,next){
res.locals.currentUser = req.email;
next();
});








module.exports = router;