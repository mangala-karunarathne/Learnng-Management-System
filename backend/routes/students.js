const router = require("express").Router();
const { request } = require("express");
let Student = require("../models/Student");

router.route("/add").post((req, res) => {
  // http://localhost:8070/student/add
  // Create in CRUD
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  const newStudent = new Student({
    name, // initialize
    age,
    gender,
  });

  newStudent
    .save()
    .then(() => {
      // Js Promise
      res.status(200).json({
        student,
        message: "Student Added Successfully",
        status: "success",
      });
    })
    .catch(() => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  // Read in CRUD
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
    // Update in CRUD
    let userId = req.params.id;
    const { name, age, gender } = req.body; // Destructure
  
    try {
      const student = await Student2.findById(userId);
  
      if (!student) {
        return res.status(404).send({ status: "User not found" });
      }
  
      student.name = name;
      student.age = age;
      student.gender = gender;
  
      await student.save();
  
      res.status(200).send({ student, status: "User updated" });
      console.log("updatedStudent:", student);
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: "Error with updating Data" });
    }
  });

router.route("/delete/:id").delete(async (req, res) => {
  // Delete in CRUD
  let userId = req.params.id;
  await Student.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  // taking a student detail
  let userId = req.params.id;
  const user = await Student.findById(userId) // await Student.findOne(email) >>> to get an email of a student ( as per requirement)
    .then((student) => {
      const user = res.status(200).send({ status: "User fetched", student });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
