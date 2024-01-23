import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EnrolledStudents = () => {
    // State variable to store the list of students
    const [students, setStudents] = useState([])
    // Function to fetch all students from the server
    const fetchAllStudents = async () => {
        try {
            // Make a GET request to the server to fetch all students
            const response = await axios.get(`http://localhost:3000/api/v1/all-students`)
            // Update the state with the fetched students
            setStudents(response.data.students)
        } catch (error) {
            // Log any errors that occur during the fetch
            console.log(error)
        }

    }
    // useEffect hook to trigger the fetch when the component mounts
    useEffect(() => {
        fetchAllStudents()
    }, [])
    console.log(students)

    return (
        <>
            <div className="student-content">
                <h1>Enrolled students</h1>
                <div className="displaying-tables">
                    <table className="all-students">
                        <tr className="individual-students">
                            <th className="individual-enteries">Roll Number</th>
                            <th className="individual-enteries">Name</th>
                            <th className="individual-enteries">CNIC</th>
                            <th className="individual-enteries">Email</th>
                            <th className="individual-enteries">Password</th>
                            <th className="individual-enteries">Batch Number</th>
                            <th className="individual-enteries">Shift</th>
                            <th className="individual-enteries">Semester</th>
                            <th className="individual-enteries">Subject Numbers</th>
                            <th className="individual-enteries">Subjects</th>
                        </tr>
                        {
                            students.map((student) => (
                                <tr key={student._id}>
                                    <td className="individual-enteries"><p className="individual-enteries">{student.rollNumber}</p></td>
                                    <td className="individual-enteries"><p className="individual-enteries">{student.name}</p></td>
                                    <td className="individual-enteries"><p className="individual-enteries">{student.cnic}</p></td>
                                    <td className="individual-enteries"><p className="individual-enteries">{student.email}</p></td>
                                    <td className="individual-enteries"><p className="individual-enteries">{student.password}</p></td>
                                    <td className="individual-enteries"><p className="individual-enteries">{student.batchNumber}</p></td>
                                    <td className="individual-enteries"><p className="individual-enteries">{student.shift}</p></td>
                                    <td className="individual-enteries"><p className="individual-enteries">{student.semester}</p></td>
                                    <td className="individual-enteries"><p className="individual-enteries">{student.subjectNumbers}</p></td>
                                    <td className="individual-enteries">
                                        <ul className="subject-elements">
                                            {student.subjects.map((subject) => (
                                                <li key={subject}>{subject.subjectName}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default EnrolledStudents