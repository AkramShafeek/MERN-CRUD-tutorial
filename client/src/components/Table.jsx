import Row from './Row';

const Table = ({ students, deleteCallBack }) => {
  return (
    <div>
      <table>
        <tr id='header'>
          <td>Firstname</td>
          <td>Lastname</td>
          <td>USN</td>
          <td>Email</td>
          <td>Year</td>
          <td>Sem</td>
          <td>Section</td>
          <td>Action</td>
        </tr>
        {students.map((student, index) => <Row student={student} isEven={index % 2 === 0} deleteCallBack={deleteCallBack}/>)}
      </table>
    </div>
  )
}

Table.defaultProps = {
  students: []
}

export default Table;