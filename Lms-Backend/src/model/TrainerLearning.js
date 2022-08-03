const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/LMS');


const Schema=  mongoose.Schema;
const LMaterials=new Schema(
    {
        Materialtitle:String,
        MaterialURL:String
    }
)
const Materiallist=mongoose.model('materials',LMaterials);
module.exports=Materiallist;