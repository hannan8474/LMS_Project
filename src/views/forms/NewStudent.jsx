import React from 'react'
import { useState, useEffect } from "react"
import "../../App.css"
import "../../style/loginForm.css"
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const NewStudent = () => {
  const navigate = useNavigate();
  // state variables
  const toast = useToast()

  // Retrieve the authToken from localStorage
  const authTokenAdmin = localStorage.getItem('authTokenAdmin');
  useEffect(() => {
    if (!authTokenAdmin) {
      navigate('/auth/admin-login');
    }
  }, [authTokenAdmin])


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
    profileImage: null,
  })
  // state variable to store students
  const [records, setRecords] = useState([]);
  // func to handle inputs
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewStudent({ ...newStudent, [name]: value });
  }

  // HandleFileInput
  const HandleFileInput = (e) => {
    setNewStudent({
      ...newStudent,
      profileImage: e.target.files[0], // Store the selected file using the input name
    });
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
      profileImage: '',
    });


    // Include the authToken in the request headers
    const config = {
      headers: {
        'Authorization': `Bearer ${authTokenAdmin}`,
        'Content-Type': 'multipart/form-data',
      },
    };

    try {

      const formData = new FormData();
      formData.append('name', newStudent.name);
      formData.append('cnic', newStudent.cnic);
      formData.append('email', newStudent.email);
      formData.append('password', newStudent.password);
      formData.append('rollNumber', newStudent.rollNumber);
      formData.append('batchNumber', newStudent.batchNumber);
      formData.append('shift', newStudent.shift);
      formData.append('semester', newStudent.semester);
      formData.append('subjectNumbers', newStudent.subjectNumbers);
      // Append subjects individually
      newStudent.subjects.forEach((subject, index) => {
        formData.append(`subjects[${index}][subjectId]`, subject.subjectId);
        formData.append(`subjects[${index}][subjectName]`, subject.subjectName);
      });
      formData.append('profileImage', newStudent.profileImage);

      const response = await axios.post(`http://localhost:3000/api/v1/add-student`, formData, config);

      console.log(response)
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
    } catch (error) {
      console.log(error);
    }

  }
  const removeAuthTokenAdmin = () => {
    localStorage.removeItem('authTokenAdmin');
    navigate('/auth/admin-login');
  }

  return (
    <>
      <div className="new-student">
        <form action="" onSubmit={HandleSubmit} className='new-student-form'>
          {/* name start */}
          <div className="form-floating mb-3 mx-5 my-5" style={{ width: '75%' }}>
            <input type="text" name="name" className="form-control" id="floatingInput name" placeholder="John Doe" value={newStudent.name} onChange={HandleInput} />
            <label htmlFor="floatingInput">Name</label>
          </div>
          {/* name end */}
          {/* cnic start */}
          <div className="form-floating mb-3 mx-5" style={{ width: '75%' }}>
            <input type="text" name="cnic" className="form-control" id="floatingInput cnic" placeholder="*****-*******-*" value={newStudent.cnic} onChange={HandleInput} />
            <label htmlFor="floatingInput">CNIC</label>
          </div>
          {/* cnic end */}
          {/* email start */}
          <div className="form-floating mb-3 mx-5" style={{ width: '75%' }}>
            <input type="email" name="email" className="form-control" id="floatingInput email" placeholder="name@example.com" value={newStudent.email} onChange={HandleInput} />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          {/* email end */}
          {/* password start */}
          <div className="form-floating mb-3 mx-5" style={{ width: '75%' }}>
            <input type="password" name="password" className="form-control" id="floatingInput password" placeholder="****" value={newStudent.password} onChange={HandleInput} />
            <label htmlFor="floatingInput">Password</label>
          </div>
          {/* password end */}
          {/* roll no start */}
          <div className="form-floating mb-3 mx-5" style={{ width: '75%' }}>
            <input type="text" name="rollNumber" className="form-control" id="floatingInput rollNumber" placeholder="bcsf00m000" value={newStudent.rollNumber} onChange={HandleInput} />
            <label htmlFor="floatingInput">Roll Number</label>
          </div>
          {/* roll no end */}
          {/* batch no start */}
          <div className="form-floating mb-3 mx-5" style={{ width: '75%' }}>
            <input type="text" name="batchNumber" className="form-control" id="floatingInput batchNumber" placeholder="F00" value={newStudent.batchNumber} onChange={HandleInput} />
            <label htmlFor="floatingInput">Batch Number</label>
          </div>
          {/* batch no end */}
          {/* shift start */}
          <div className="form-floating mb-3 mx-5" style={{ width: '75%' }}>
            <input type="text" name="shift" className="form-control" id="floatingInput shift" placeholder="Morning/Afternoon" value={newStudent.shift} onChange={HandleInput} />
            <label htmlFor="floatingInput">Shift</label>
          </div>
          {/* shift end */}
          {/* semester start */}
          <div className="form-floating mb-3 mx-5" style={{ width: '75%' }}>
            <input type="text" name="semester" className="form-control" id="floatingInput semester" placeholder="1st" value={newStudent.semester} onChange={HandleInput} />
            <label htmlFor="floatingInput">Semester</label>
          </div>
          {/* semester end */}
          {/* subject numbers start */}
          <div className="form-floating mb-3 mx-5" style={{ width: '75%' }}>
            <input type="number" name="subjectNumbers" className="form-control" id="floatingInput subjectNumbers" placeholder="7" value={newStudent.subjectNumbers} onChange={HandleInput} />
            <label htmlFor="floatingInput">Subject Number</label>
          </div>
          {/* subject numbers end */}
          {/* Dynamic subject name fields */}
          {newStudent.subjectNumbers > 0 &&
            <div className="mx-5">
              <p>Enter Subject Names:</p>
              {Array.from({ length: newStudent.subjectNumbers }).map((_, index) => (
                <div key={index} className="form-floating mb-3" style={{ widht: '75%' }}>
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
          {/* File starts */}
          <div className="form-floating mb-3 mx-5" style={{ width: '75%' }}>
            <input
              type="file"
              name="profileImage"
              className="form-control"
              id="floatingInput profileImage"
              // value={newStudent.profileImage} 
              onChange={HandleFileInput}
            />

            <label htmlFor="floatingInput">Add Image</label>
          </div>
          {/* File ends */}
          {/* submit button start */}
          <div className="form-floating mb-3 mx-5">
            <button type="submit" className='button-styling'>Add Student</button>
          </div>
          {/* submit button end */}
          {/* Go back button starts */}
          <div className="form-floating mb-3 mx-5">
            <button type="button" className='button-styling' onClick={removeAuthTokenAdmin}>Log Out</button>
          </div>
          {/* Go back button ends */}
        </form>
      </div>
    </>
  )
}

export default NewStudent