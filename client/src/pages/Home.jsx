import React, { useEffect, useState } from 'react'
import { deleteStudent, getStudents } from '../services/api'
import Table from '../components/Table';

const Home = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const students = await getStudents();
      setStudents(students);
    } catch (error) {
      console.log("Couldn't fetch students");
    }
  }

  const deleteStudentApi = async (studentData) => {
    try {
      const deletedStudent = await deleteStudent(studentData);
      const newStudents = students.filter((student) => student.usn !== deletedStudent.usn);
      setStudents(newStudents);
    } catch (error) {
      console.log("Couldn't delete student");
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container d-flex w-100 j-center a-center p-20 mt-40">
      {students.length > 0 ? <Table students={students} deleteCallBack={deleteStudentApi} /> : <h2>No Students found</h2>}
    </div>
  )
}

export default Home