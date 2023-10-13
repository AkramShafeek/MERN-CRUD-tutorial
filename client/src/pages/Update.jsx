import React, { useState } from 'react'
import { updateStudent } from '../services/api';

const Update = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [usn, setUsn] = useState();
  const [email, setEmail] = useState();
  const [year, setYear] = useState();
  const [sem, setSem] = useState();
  const [section, setSection] = useState();

  const submit = async () => {
    const payload = {
      firstname,
      lastname,
      usn,
      email,
      year,
      sem,
      section
    }

    try {
      const data = await updateStudent(payload);
      console.log(data);
    } catch (error) {
      console.log("Error in updating student");
    }
  }

  return (
    <div className="d-flex direction-col j-center a-center w-100 gap-20 p-20 mt-40">
      <h2>Update Student</h2>
      <div className="create-form border-radius-10 shadow p-20">
        <div>
          <p>Firstname:</p>
          <input type="text" onChange={(event) => setFirstname(event.target.value)} />
        </div>
        <div>
          <p>Lastname:</p>
          <input type="text" onChange={(event) => setLastname(event.target.value)} />
        </div>
        <div>
          <p>USN:</p>
          <input type="text" onChange={(event) => setUsn(event.target.value)} />
        </div>
        <div>
          <p>E-mail:</p>
          <input type="text" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <p>Year:</p>
          <input type="number" onChange={(event) => setYear(event.target.value)} />
        </div>
        <div>
          <p>Sem:</p>
          <input type="number" onChange={(event) => setSem(event.target.value)} />
        </div>
        <div>
          <p>Section:</p>
          <input type="text" onChange={(event) => setSection(event.target.value)} />
        </div>
      </div>
      <button className="btn btn-primary" onClick={submit}>Update</button>
    </div>
  )
}

export default Update