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
    .then((student) => {
      // Js Promise
      res.status(200).json({
        student,
        message: "Student Added Successfully",
        status: "success",
      });
    })
    .catch((err) => {
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

  if (!name || !age || !gender) {
    return res
      .status(400)
      .json({ status: "error", message: "All inputs are required" });
  }

  try {
    const student = await Student.findById(userId);

    if (!student) {
      return res
        .status(404)
        .json({ status: "error1", message: "User not found" });
    }

    student.name = name;
    student.age = age;
    student.gender = gender;

    await student.save();

    res
      .status(200)
      .json({ status: "success", message: "User updated", student });
    console.log("updatedStudent:", student);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "error2", message: "Error with updating data" });
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
      if (!student) {
        return res.status(404).send({ status: "User not found" });
      }
      res.status(200).send({ status: "User fetched", student });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
