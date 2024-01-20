import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EnrolledStudents = () => {
    const [students, setStudents] = useState([])

    const fetchAllStudents = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/all-students`)
            setStudents(response.data.students)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchAllStudents()
        //   return () => {
        //     second
        //   }
    }, [])
    console.log(students)

    return (
        <>
            <>
                <h1>Enrolled students</h1>
                <ul>

                    {
                        students.map((student) => (
                            <li key={student._id}>
                                <p>{student.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </>
        </>
    )
}

export default EnrolledStudents