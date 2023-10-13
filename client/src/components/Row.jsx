import React from 'react'
import { deleteStudent } from '../services/api';

const Row = ({ student, isEven, deleteCallBack }) => {
  const { firstname, lastname, usn, email, year, sem, section } = student;
  return (
    <>
      <tr className={isEven ? 'even-row' : 'odd-row'}>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{usn}</td>
        <td>{email}</td>
        <td>{year}</td>
        <td>{sem}</td>
        <td>{section}</td>
        <td><button className='btn btn-error' onClick={() => deleteCallBack(student)}>Delete</button></td>
      </tr>
    </>
  )
}

export default Row