const router = require('express').Router();
const { request } = require('express');
let Student = require('../models/Student');

router.route('/add').post((req,res)=>{ // http://localhost:8070/student/add
// Create in CRUD
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({

        name, // initialize
        age,
        gender

    })

    newStudent.save().then(()=> {    // Js Promise
        res.json('Student Added')

    }).catch(()=>{
        console.log(err);
    })

})

router.route('/').get((req,res)=>{
// Read in CRUD
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err) =>{
        console.log(err)
    })

})

router.route('/update/:id').put(async (req, res) =>{
// Update in CRUD
    let userId = req.params.id;
    const {name, age, gender} = req.body;// Destructure
    
    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent)
     /* same thing can be done using following code,
    const update = await Student.findByIdAndUpdate(userId, {name,age,gender})*/
    .then(()=>{
        res.status(200).send({status: "User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating Data"});
    })
}) // back end userId fetch

router.route("/delete/:id").delete(async (req, res) => {
    // Delete in CRUD
    let userId = req.params.id;
    await Student.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) =>{
    // taking a student detail 
    let userId = req.params.id;
    const user = await Student.findById(userId) // await Student.findOne(email) >>> to get an email of a student ( as per requirement)
        .then((student)=>{
            const user = res.status(200).send({status:"User fetched", student})
        }).catch((err) =>{
             console.log(err.message);
             res.status(500).send({status: "Error with get user", error: err.message});
        })
})

module.exports = router;   
