const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/LMS');


const Schema=  mongoose.Schema;

var TrainerSchema= new Schema({
    trainername:String,
    traineraddress:String,
    traineremail:String,
    trainerph:String,
    traineredu:String,
    trainerpwd:String,
    trainerskill:String,
     trainerexp:String,
     tracours:String,
     tradate:String,
     tracouid:String,
    isApproved:Boolean
})
var TrainerData = mongoose.model('Trainer',TrainerSchema);
module.exports=TrainerData;