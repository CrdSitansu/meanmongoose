var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');


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

router.post('/adduser', (req,res)=>{
    var user_name = req.body.name;
    var user_addr = req.body.address;

    var userobj = {name:user_name,address:user_addr};
    User.create(userobj, (err,adduserfrm)=>{
        if(err) res.send('err');
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
        let id = userdata;
        console.log(id);
    User.findById(id,(err,selected)=>{
        if(err) res.send('err');
        response.data = selected;
        res.json(response);
        console.log(response);
        
    })

});

module.exports = router;