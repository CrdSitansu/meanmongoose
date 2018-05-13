var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        name: {
            type: 'string',
            required: true
        },
        address: {
          type: 'string'
        },
        filepath : String
    });
var User = mongoose.model('User', schema);
module.exports = User;
