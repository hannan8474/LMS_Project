import React from 'react'
import { useState } from "react"
import "../../App.css"
import axios from 'axios'
import { useToast } from '@chakra-ui/react'

const NewStudent = () => {
  // state variables
  const toast = useToast()

  const [newStudent, setNewStudent] = useState({
    name: '',
    cnic: '',
    email: '',
    password: '',
    rollNumber: '',
    batchNumber: '',
    shift: '',
    semester: '',
    subjectNumbers: '',
    subjects: [], // New state to store subjects
  })
  // state variable to store students
  const [records, setRecords] = useState([]);
  // func to habdle inputs
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewStudent({ ...newStudent, [name]: value });
  }

  // function to handle submit form
  const HandleSubmit = async (e) => {
    e.preventDefault();
    // Generate subjects array based on subjectNumbers
    const subjects = [];
    for (let i = 1; i <= newStudent.subjectNumbers; i++) {
      subjects.push({ subjectId: i, subjectName: `Subject ${i}` });
    }

    const newStudents = {
      ...newStudent,
      id: new Date().getTime().toString(),
      subjects: subjects,
    };
    // Update records and reset form
    setRecords([...records, newStudents]);
    setNewStudent({
      name: '',
      cnic: '',
      email: '',
      password: '',
      rollNumber: '',
      batchNumber: '',
      shift: '',
      semester: '',
      subjectNumbers: '',
      subjects: [],
    });
    const response = await axios.post(`http://localhost:3000/api/v1/add-student`, newStudent)
    if (response.data.success) {
      toast({
        title: 'Submitted',
        description: "Student successfully added to DataBase",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Error',
        description: 'Please fill all the fields properly',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }
  return (
    <>
      <div className="new-student">
        <form action="" onSubmit={HandleSubmit} className='new-student-form'>
          {/* name start */}
          <div className="form-floating mb-3 mx-5 my-5">
            <input type="text" name="name" className="form-control" id="floatingInput name" placeholder="John Doe" value={newStudent.name} onChange={HandleInput} />
            <label htmlFor="floatingInput">Name</label>
          </div>
          {/* name end */}
          {/* cnic start */}
          <div className="form-floating mb-3 mx-5">
            <input type="text" name="cnic" className="form-control" id="floatingInput cnic" placeholder="*****-*******-*" value={newStudent.cnic} onChange={HandleInput} />
            <label htmlFor="floatingInput">CNIC</label>
          </div>
          {/* cnic end */}
          {/* email start */}
          <div className="form-floating mb-3 mx-5">
            <input type="email" name="email" className="form-control" id="floatingInput email" placeholder="name@example.com" value={newStudent.email} onChange={HandleInput} />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          {/* email end */}
          {/* password start */}
          <div className="form-floating mb-3 mx-5">
            <input type="password" name="password" className="form-control" id="floatingInput password" placeholder="****" value={newStudent.password} onChange={HandleInput} />
            <label htmlFor="floatingInput">Password</label>
          </div>
          {/* password end */}
          {/* roll no start */}
          <div className="form-floating mb-3 mx-5">
            <input type="text" name="rollNumber" className="form-control" id="floatingInput rollNumber" placeholder="bcsf00m000" value={newStudent.rollNumber} onChange={HandleInput} />
            <label htmlFor="floatingInput">Roll Number</label>
          </div>
          {/* roll no end */}
          {/* batch no start */}
          <div className="form-floating mb-3 mx-5">
            <input type="text" name="batchNumber" className="form-control" id="floatingInput batchNumber" placeholder="F00" value={newStudent.batchNumber} onChange={HandleInput} />
            <label htmlFor="floatingInput">Batch Number</label>
          </div>
          {/* batch no end */}
          {/* shift start */}
          <div className="form-floating mb-3 mx-5">
            <input type="text" name="shift" className="form-control" id="floatingInput shift" placeholder="Morning/Afternoon" value={newStudent.shift} onChange={HandleInput} />
            <label htmlFor="floatingInput">Shift</label>
          </div>
          {/* shift end */}
          {/* semester start */}
          <div className="form-floating mb-3 mx-5">
            <input type="text" name="semester" className="form-control" id="floatingInput semester" placeholder="1st" value={newStudent.semester} onChange={HandleInput} />
            <label htmlFor="floatingInput">Semester</label>
          </div>
          {/* semester end */}
          {/* subject numbers start */}
          <div className="form-floating mb-3 mx-5">
            <input type="number" name="subjectNumbers" className="form-control" id="floatingInput subjectNumbers" placeholder="7" value={newStudent.subjectNumbers} onChange={HandleInput} />
            <label htmlFor="floatingInput">Subject Number</label>
          </div>
          {/* subject numbers end */}

          {/* Dynamic subject name fields */}
          {newStudent.subjectNumbers > 0 &&
            <div className="mx-5">
              <p>Enter Subject Names:</p>
              {Array.from({ length: newStudent.subjectNumbers }).map((_, index) => (
                <div key={index} className="form-floating mb-3">
                  <input
                    type="text"
                    name={`subject${index + 1}`}
                    className="form-control"
                    placeholder={`Subject ${index + 1}`}
                    value={newStudent.subjects[index] ? newStudent.subjects[index].subjectName : ''}
                    onChange={(e) => {
                      const subjectsCopy = [...newStudent.subjects];
                      subjectsCopy[index] = {
                        subjectId: index + 1,
                        subjectName: e.target.value,
                      };
                      setNewStudent({ ...newStudent, subjects: subjectsCopy });
                    }}
                  />
                  <label htmlFor={`floatingInput subject${index + 1}`}>{`Subject ${index + 1}`}</label>
                </div>
              ))}
            </div>
          }
          {/* submit button start */}
          <div className="form-floating mb-3 mx-5">
            <button type="submit" className='button-styling'>Add Student</button>
          </div>
          {/* submit button end */}
        </form>
      </div>
    </>
  )
}

export default NewStudent