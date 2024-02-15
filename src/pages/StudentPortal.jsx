import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../style/studentPortal.css"
import "../style/responsive.css"
import { API_VERSION_1, BASE_URL, endPoints } from '../constants/urls/urls'
import getApiService from '../services/getApiSevice'

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
  const [admin, setAdmin] = useState({})

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

      // Make a GET request to the server to fetch all students using URLS and serivces to achieve our DRY purpose
      const response = await getApiService(endPoints.REQUESTED_STUDENT, config);
      console.log(response)

      // Update the state with the fetched students
      setStudent(response.data.student)
      setSubjects(response.data.student.subjects)
      setAdmin(response.data.student.adminId)

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
            <span>Subjects Number: </span>
            <p className='data-student'>{student.subjectNumbers}</p>
          </div>
          <div>
            <span>Subjects: </span>
            {subjects.map((index) => (
              <div key={index.subjectId} className="individual-data-entries">
                <span className='data-student-list'>{index.subjectName}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="img-student p-5"><img src={student.profileImageLink} alt="Student Phot0" /></div>
      </div>
      <div className="button-admin">
        <button type="button" onClick={removeAuthTokenStudent} className='button-styling mx-5 my-3 student-log-out'>Log Out</button>
        <div className="admin">
          <span className='admin-info'>Added by:{admin.email}</span>
        </div>
      </div>
    </>
  )
}

export default StudentPortal