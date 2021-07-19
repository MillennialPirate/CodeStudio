const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const penSchema = {
    penId : {
        type : String, 
        required: true
    }, 
    topic : {
        type : String, 
        required: true
    },
    html : {
        type : String, 
    },
    css : {
        type : String, 
    },
    js : {
        type : String, 
    }, 
    uid : {
        type : String, 
        required: true
    }
}
const Pen = mongoose.model('Pen', penSchema);
module.exports = Pen;