const express = require('express');
const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent } = require('../controller/student');
const router = express.Router();

router.route('/').get(getStudents);
router.route('/').post(addStudent);
router.route('/').put(updateStudent);
router.route('/').delete(deleteStudent);

module.exports = router;