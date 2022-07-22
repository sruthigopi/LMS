export class TrainerModel{
    constructor(
       public trainername:String,
       public traineraddress:String,
       public traineremail:String,
       public trainerph:String,
       public traineredu:String,
    //    public trainerskill:String,
    //    public trainerexp:Number,
       public trainerpwd:String,
       public isApproved:boolean
    ){}
}