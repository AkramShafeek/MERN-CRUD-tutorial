const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  usn: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  year: {
    type: Number,
    required: true
  },
  sem: {
    type: Number,
    required: true
  },
  section: {
    type: String,
    required: true
  }
});

const Student = mongoose.model("students", StudentSchema);
module.exports = Student;