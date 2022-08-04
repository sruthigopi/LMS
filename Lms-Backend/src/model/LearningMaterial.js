const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/LMS');


const Schema =  mongoose.Schema;

var MaterialSchema= new Schema({
    title:String,
    url:String,
    desc:String,
    file:String
})
var MaterialDatacsa = mongoose.model('materialscsa',MaterialSchema);
module.exports= MaterialDatacsa;