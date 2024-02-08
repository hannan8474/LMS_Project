  import axios from 'axios'
  import React, { useEffect, useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  import "../style/studentPortal.css"
  import "../style/responsive.css"

  const StudentPortal = () => {
    const navigate = useNavigate();

    const authTokenStudent = localStorage.getItem('authTokenStudent');
    useEffect(() => {
      if (!authTokenStudent) {
        navigate('/auth/student-login');
      }
    }, [authTokenStudent])

    // State variable to store the list of students
    const [student, setStudent] = useState({})
    const [subjects, setSubjects] = useState([])

    // Function to fetch all students from the server
    const fetchAllStudents = async () => {
      try {
        // Include the authToken in the request headers
        const config = {
          headers: {
            'Authorization': `Bearer ${authTokenStudent}`,
            'Content-Type': 'application/json',
          },
        };

        // Make a GET request to the server to fetch all students
        const response = await axios.get(`http://localhost:3000/api/v1/requested-student`, config);

        // Update the state with the fetched students
        setStudent(response.data.student)
        setSubjects(response.data.student.subjects)

      } catch (error) {
        // Log any errors that occur during the fetch
        console.log(error)
      }
    }

    // useEffect hook to trigger the fetch when the component mounts
    useEffect(() => {
      fetchAllStudents()
    }, [])

    // LogOut button funtion to remove the authToken from Local Storage
    const removeAuthTokenStudent = () => {
      localStorage.removeItem('authTokenStudent');
      navigate('/auth/student-login');
    }

    return (
      <>
        <div className="student-content">
          <div className="data p-5">
            <div className="individual-data-entries">
              <span>Name: </span>
              <p className='data-student'>{student.name}</p>
            </div>
            <div className="individual-data-entries">
              <span>CNIC: </span>
              <p className='data-student'>{student.cnic}</p>
            </div>
            <div className="individual-data-entries">
              <span>Email: </span>
              <p className='data-student'>{student.email}</p>
            </div>
            <div className="individual-data-entries">
              <span>Roll Number: </span>
              <p className='data-student'>{student.rollNumber}</p>
            </div>
            <div className="individual-data-entries">
              <span>Batch Number: </span>
              <p className='data-student'>{student.batchNumber}</p>
            </div>
            <div className="individual-data-entries">
              <span>Shift: </span>
              <p className='data-student'>{student.shift}</p>
            </div>
            <div className="individual-data-entries">
              <span>Semester: </span>
              <p className='data-student'>{student.semester}</p>
            </div>
            <div className="individual-data-entries">
              <span>Subject Numbers: </span>
              <p className='data-student'>{student.subjectNumbers}</p>
            </div>
            <div>
                <span>Subjects: </span>
                {subjects.map((index) => (
                  <div  key={index.subjectId} className="individual-data-entries">
                    <span className='data-student-list'>{index.subjectName}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className="img p-5"><img src={student.profileImageLink} alt="Student Phot0" /></div>
        </div>
        <button type="button" onClick={removeAuthTokenStudent} className='button-styling mx-5 my-3'>Log Out</button>
      </>
    )
  }

  export default StudentPortal