const express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
const jwt =require('jsonwebtoken');

const StudentData= require('./src/model/StudentData');
const TrainerData=require('./src/model/TrainerData')

var app = express();
app.use(bodyParser.json());
app.use(cors());

// validation middle ware
// admin
function verifyToken(req,res,next){
    
    if(!req.headers.authorization){
      return res.status(401).send('unautharized request');
    }

    let token1= req.headers.authorization.split(' ')[1]
 
    if(token1=='null'){
      return res.status(401).send('unautharized request');
    }
  
    let payload= jwt.verify(token1,'secretkey')
    console.log(payload)
  
    if(!payload){
      return res.status(401).send('unautharized request');
    }
    req.userId=payload.subject
    next()
}



// signup and login portion

// student signup
app.post('/studentsignup',(req,res)=>{
    let studentData=req.body
    
    var student={
        studentname:studentData.name,
        studentaddress:studentData.address,
        studentemail:studentData.email,
        studentph:studentData.ph,
        studentedu:studentData.edu,
        studentpwd:studentData.pwd,
        isApproved:false
    }
    console.log(student)
    var students= new StudentData (student);
    students.save()
    });

// login student
app.post('/studentlogin',(req,res)=>{
  
    let studentData=req.body
   
    StudentData.findOne({"studentemail":studentData.studentemail, "studentpwd":studentData.studentpwd,isApproved:"true"},(err,studentData)=>{
     if(studentData){
         console.log('student SUCCESSFULLY LOGGEDIN');
 
     let payload = {subject:studentData.studentemail+studentData.studentpwd}
     let token = jwt.sign(payload,'secretkey')
     res.status(200).send({token})
     }
     else{
         console.log('FAILED TO LOGIN');
         res.status(401).send('invalid credential');
     }
    })
     })

    //admin login
    admineusername='admin'
    adminepwd='admin@123'

app.post('/adminlogin',(req,res)=>{
    let adminData=req.body
    if(!admineusername){
        res.status(401).send('invalid username');
    }
    if(adminepwd!==adminData.adminepwd){
        res.status(401).send('invalid password');
    }
    else{
        let payload = {subject:admineusername+adminepwd}
        let token1 = jwt.sign(payload,'secretkey')
        console.log('admin logged in');
        res.status(200).send({token1})
    }
    })

// trainer signup
 
app.post('/trainersignup',(req,res)=>{
    let trainerData=req.body
    
    var trainer={
        trainername:trainerData.name,
        traineraddress:trainerData.address,
        traineremail:trainerData.email,
        trainerph:trainerData.ph,
        traineredu:trainerData.edu,
        trainerpwd:trainerData.pwd,
        // trainerskill:trainerData.skill,
        // trainerexp:trainerData.exp,
        isApproved:false
       
    }
    console.log(trainer)
    var trainers= new TrainerData (trainer);
    trainers.save()
    });

    // trainer login

    app.post('/trainerlogin',(req,res)=>{
  
        let trainerData=req.body
       
        TrainerData.findOne({"traineremail":trainerData.traineremail, "trainerpwd":trainerData.trainerpwd,isApproved:"true"},(err,trainerData)=>{
         if(trainerData){
             console.log('trainer SUCCESSFULLY LOGGEDIN');
     
         let payload = {subject:trainerData.traineremail+trainerData.trainerpwd}
         let token3 = jwt.sign(payload,'secretkey')
         res.status(200).send({token3})
         }
         else{
             console.log('FAILED TO LOGIN trainer');
             res.status(401).send('invalid credential');
         }
        });
         })

    // end signup and login


    // get student details for approval
    app.get('/studentdetails',verifyToken,function(req,res){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods: POST,PATCH, GET, DELETE, PUT, OPTIONS");
        StudentData.find({isApproved:"false"})
        .then(function(students){
            console.log('details of student need aproval');
            res.send(students);
        });
    });

    // get trainer details for approval
app.get('/trainerdetails',verifyToken,function(req,res){
    console.log('tariner acess server')
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: POST,PATCH, GET, DELETE, PUT, OPTIONS");
    TrainerData.find({isApproved:"false"})
    .then(function(trainers){
        console.log('details of tariner need aproval');
        console.log(trainers)
        res.send(trainers);
       
    });
});

    // approve students
app.put('/approve',verifyToken,function(req,res){
    console.log(req.body);
    id=req.body._id

    StudentData.findByIdAndUpdate({"_id":id},{$set:{
        "isApproved":"true"
    }})
    .then(()=>{
        console.log('students approval successful');
     res.send()
    });
})
// print approval student list
app.get('/aprovestulist',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: POST,PATCH, GET, DELETE, PUT, OPTIONS");
    StudentData.find({isApproved:"true"})
    .then(function(students){
        console.log('aproved student list');
        res.send(students);
    });
});
// approved trainer list
app.get('/aprovetralist',verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: POST,PATCH, GET, DELETE, PUT, OPTIONS");
    TrainerData.find({isApproved:"true"})
    .then(function(trainers){
        console.log(trainers);
        res.send(trainers);
    });
});
// decline students
app.delete('/declinestu/:id',verifyToken,(req,res)=>{
    id = req.params.id;
    StudentData.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('student declined');
    res.send()
   })
});

// delete entrolled student
app.delete('/deletestu/:id',verifyToken,(req,res)=>{
    id = req.params.id;
    StudentData.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('entrolled student deleted');
    res.send()
   })
});

// get studentprof for update

app.get('/:id',verifyToken,(req,res)=>{
    const id=req.params.id;
    StudentData.findOne({"_id":id})
    .then((student)=>{
     res.send(student)
    });
})

// update student prof
app.put('/updatestuprf',verifyToken,(req,res)=>{
    console.log(req.body);
    id=req.body._id,
    studentname=req.body.studentname,
    studentaddress=req.body.studentaddress,
    studentemail=req.body.studentemail,
    studentph=req.body. studentph,
    studentedu=req.body.studentedu
    
    StudentData.findByIdAndUpdate({"_id":id},
    // find with the id and update with the set ie new productid mans that comming from the frontend
              {
                  $set:{
                    studentname: studentname,
                    studentaddress:studentaddress,
                    studentemail:studentemail,
                    studentph:studentph,
                    studentedu:studentedu
                  }
              }
    )
    .then(function(){
        res.send();
    })
})




// tariner in admin


// approve trainer
app.put('/approvetrainer',verifyToken,function(req,res){
   
    id=req.body._id
    console.log(req.body);
    TrainerData.findByIdAndUpdate({"_id":id},{$set:{
        "isApproved":"true"
    }})
    .then(()=>{
        console.log('trainer approval success');
     res.send()
    });
})

// decline trainer
app.delete('/declinetrar/:id',verifyToken,(req,res)=>{
    id = req.params.id;
    TrainerData.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('tariner declined');
    res.send()
   })
});
// delete entrolled trainer
app.delete('/deletetra/:id',verifyToken,(req,res)=>{
    id = req.params.id;
    TrainerData.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('entrolled tariner deleted');
    res.send()
   })
});
// get tarinerprof for update

app.get('/edittra/:id',verifyToken,(req,res)=>{
    const id=req.params.id;
    TrainerData.findOne({"_id":id})
    .then((trainer)=>{
     res.send(trainer)
     console.log(trainer)
    });
})

// update trainer prof
app.put('/updatetraprf',verifyToken,(req,res)=>{
    // console.log(req.body); 
    id=req.body._id,
    trainername=req.body.trainername,
    traineraddress=req.body.traineraddress,
    trainerph=req.body. trainerph,
    traineredu=req.body.traineredu
    
    TrainerData.findByIdAndUpdate({"_id":id},
    // find with the id and update with the set ie new productid mans that comming from the frontend
              {
                  $set:{
                    trainername: trainername,
                    traineraddress:traineraddress,
                    trainerph:trainerph,
                    traineredu:traineredu
                  }
              }
    )
    .then(function(){
        res.send();
    })
})

app.listen(3000,()=>{
    console.log('server is ready');
});