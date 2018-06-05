var mongoose = require('mongoose');

//var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require("bcrypt");

var AdminuserSchema = new mongoose.Schema({
    email: {
        type: String,
        index: true
      },
      password: {
        type: String,
        index: true
      }
})
//AdminuserSchema.plugin(passportLocalMongoose);
Adminuser = module.exports = mongoose.model("Adminuser",AdminuserSchema);


module.exports.createUser = function(newAdmin, callback){
	bcrypt.genSalt(10, function(err, salt){
		bcrypt.hash(newAdmin.password, salt, function(err, hash){
			newAdmin.password = hash;
			newAdmin.save(callback);
		})
	})
}

module.exports.getemailByEmail = function(email, callback){
	var query = { email:email};
	console.log('10');
	console.log('model'+query);
	Adminuser.findOne(query,callback);
}

module.exports.getemailById = function(id, callback){
	console.log('modelId'+id);
	console.log('11');
	Adminuser.findById(id,callback);
}
module.exports.comparePassword = function(candidatePassword, hash ,callback){

		bcrypt.compare(candidatePassword, hash, function(err, isMatch){
			if(err) throw err;
			callback(null, isMatch);
			console.log('12');
		});
	
}