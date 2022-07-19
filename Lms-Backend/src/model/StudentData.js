const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/LMS');


const Schema=  mongoose.Schema;

var StudentSchema= new Schema({
    studentname:String,
    studentaddress:String,
    studentemail:String,
    studentph:String,
    studentedu:String,
    studentpwd:String,
    isApproved:Boolean
})
var StudentData = mongoose.model('Student',StudentSchema);
module.exports=StudentData;