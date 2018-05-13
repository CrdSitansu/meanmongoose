var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
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


mongoose.connect("mongodb://localhost/meanmongoose");
//console.log(mongoose.connection.readyState);
var User = require('./models/user');


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

router.post('/adduser', upload,(req,res)=>{
    var filepath = req.file.destination.substr(7) + '/' + req.file.filename;
    var user_name = req.body.name;
    var user_addr = req.body.address;
    //console.log(filepath);
    var userobj = {name:user_name,address:user_addr,filepath:filepath};
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

module.exports = router;