import React from 'react'
import { useState } from "react"
import "../App.css"

const NewStudent = () => {
  // state variables
  const [newStudent, setNewStudent] = useState({
    name: '',
    cnic: '',
    email: '',
    rollNumber: '',
    batchNumber: '',
    shift: '',
    semester: '',
    subjectNumber: '',
  })
  // state variable to store students
  const [records, setRecords] = useState([]);
  // func to habdle inputs
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewStudent({ ...newStudent, [name]: value });
  }
  // handleSubjectFields
  const handleSubjectFields = (e) => {
    e.preventDefault();
    console.log(newStudent.subjectNumber)
  }
  // function to s=handle submit form
  const HandleSubmit = (e) => {
    e.preventDefault();
    const newStudents = { ...newStudent, id: new Date().getTime().toString() };
    setRecords([...records, newStudents]);
    setNewStudent({
      name: '',
      cnic: '',
      email: '',
      rollNumber: '',
      batchNumber: '',
      shift: '',
      semester: '',
      subjectNumber: '',
    });
  }
  return (
    <>
      <div className="new-student">
        <form action="" onSubmit={HandleSubmit} className='new-student-form'>
          <div className="form-floating mb-3 mx-5 my-5">
            <input type="text" name="name" className="form-control" id="floatingInput name" placeholder="John Doe" value={newStudent.name} onChange={HandleInput} />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3 mx-5">
            <input type="text" name="cnic" className="form-control" id="floatingInput cnic" placeholder="*****-*******-*" value={newStudent.cnic} onChange={HandleInput} />
            <label htmlFor="floatingInput">CNIC</label>
          </div>
          <div className="form-floating mb-3 mx-5">
            <input type="email" name="email" className="form-control" id="floatingInput email" placeholder="name@example.com" value={newStudent.email} onChange={HandleInput} />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3 mx-5">
            <input type="text" name="rollNumber" className="form-control" id="floatingInput rollNumber" placeholder="bcsf00m000" value={newStudent.rollNumber} onChange={HandleInput} />
            <label htmlFor="floatingInput">Roll Number</label>
          </div>
          <div className="form-floating mb-3 mx-5">
            <input type="text" name="batchNumber" className="form-control" id="floatingInput batchNumber" placeholder="F00" value={newStudent.batchNumber} onChange={HandleInput} />
            <label htmlFor="floatingInput">Batch Number</label>
          </div>
          <div className="form-floating mb-3 mx-5">
            <input type="text" name="shift" className="form-control" id="floatingInput shift" placeholder="Morning/Afternoon" value={newStudent.shift} onChange={HandleInput} />
            <label htmlFor="floatingInput">Shift</label>
          </div>
          <div className="form-floating mb-3 mx-5">
            <input type="text" name="semester" className="form-control" id="floatingInput semester" placeholder="1st" value={newStudent.semester} onChange={HandleInput} />
            <label htmlFor="floatingInput">Semester</label>
          </div>
          <div className="form-floating mb-3 mx-5">
            <input type="number" name="subjectNumber" className="form-control" id="floatingInput subjectNumber" placeholder="7" value={newStudent.subjectNumber} onChange={HandleInput} />
            <label htmlFor="floatingInput">Subject Number</label>
          </div>
          <div className="form-floating mb-3 mx-5">
            <button type="submit" className='button-styling'>Add Student</button>
          </div>
        </form>
      </div>
      {/* showing inputs on browser window */}
      <div>
        {
          records.map((curElem) => {
            return (
              <div key={curElem.id} className='show-student-data'>
                <div className='mx-5 my-5'>
                  <p>{curElem.name}</p>
                  <p>{curElem.cnic}</p>
                  <p>{curElem.email}</p>
                  <p>{curElem.rollNumber}</p>
                  <p>{curElem.batchNumber}</p>
                  <p>{curElem.shift}</p>
                  <p>{curElem.semester}</p>
                  <p>{curElem.subjectNumber}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default NewStudent