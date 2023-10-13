const Student = require("../models/Student")

// retrieves all students data
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
}

// creates a new student data
const addStudent = async (req, res) => {  
  try {
    const student = await Student.create(req.body);
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
}

// finds a student based on the usn provided and updates the respective student data
const updateStudent = async (req, res) => {
  try {
    const students = await Student.findOneAndUpdate({ usn: req.body.usn }, req.body, { new: true });
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
}

// finds a student based on the usn provided and deletes the respective student data
const deleteStudent = async (req, res) => {
  try {
    console.log(req.body.usn);
    const students = await Student.findOneAndDelete({ usn: req.body.usn });
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent
};