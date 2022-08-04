mongoose.connect('mongodb://localhost:27017/LMS');


const Schema =  mongoose.Schema;

var MaterialSchema= new Schema({
    title:String,
    url:String,
    desc:String,
    file:String
})
var MaterialDatadsa = mongoose.model('materialsdsa',MaterialSchema);
module.exports= MaterialDatadsa;
