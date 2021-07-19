const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = {
    uid : {
        type : String, 
        required : true
    }, 
    name : {
        type : String, 
        required : true, 
    },
    pen : {
        type : String, 
        required : true, 
    }
}
const User = mongoose.model('User', userSchema);
module.exports = User;