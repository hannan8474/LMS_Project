import React, { useState } from 'react'
import axios from 'axios'
import "../../App.css"
import { useToast } from '@chakra-ui/react'

const SocietyRegistration = () => {
    // useToast start
    const toast = useToast()
    // useToast end
    // useState Hook start
    const [userRegistration, setuserRegistration] = useState({
        name: '',
        rollNumber: '',
        email: '',
        department: '',
        semester: '',
        hobbies: '',
        aboutYourself: '',
    });
    // useState Hook end
    // handlInput start
    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRegistration({ ...userRegistration, [name]: value });
    }
    // handlInput end
    // useState Hook start
    const [records, setrecords] = useState([]);
    // useState Hook end
    // handleSubmit start
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const NewRecord = { ...userRegistration, id: new Date().getTime().toString() };
        setrecords([...records, NewRecord]);
        setuserRegistration({
            name: '',
            rollNumber: '',
            email: '',
            department: '',
            semester: '',
            hobbies: '',
            aboutYourself: '',
        });
        const response = await axios.post(`http://localhost:3000/api/v1/society-registration-student`, userRegistration)
        if (response.data.success) {
            toast({
                title: 'Submitted',
                description: 'Your form is submitted successfully. Your registration will be confirmed soon',
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
    // handleSubmit end
    return (
        <>
            <form action="" onSubmit={HandleSubmit} className='new-student-form'>
                {/* name start */}
                <div className="form-floating mb-3 mx-5 my-5">
                    <input type="text" name="name" className="form-control" id="floatingInput name" placeholder="John Doe" value={userRegistration.name} onChange={HandleInput} />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                {/* name end */}
                {/* roll no start */}
                <div className="form-floating mb-3 mx-5">
                    <input type="text" name="rollNumber" className="form-control" id="floatingInput rollNumber" placeholder="bcsf00m000" value={userRegistration.rollNumber} onChange={HandleInput} />
                    <label htmlFor="floatingInput">Roll Number</label>
                </div>
                {/* roll no end */}
                {/* email start */}
                <div className="form-floating mb-3 mx-5">
                    <input type="email" name="email" className="form-control" id="floatingInput email" placeholder="abc@gmail.com" value={userRegistration.email} onChange={HandleInput} />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                {/* email end */}
                {/* Department start */}
                <div className="form-floating mb-3 mx-5">
                    <input type="text" name="department" className="form-control" id="floatingInput department" placeholder="F00" value={userRegistration.department} onChange={HandleInput} />
                    <label htmlFor="floatingInput">Department</label>
                </div>
                {/* Department end */}
                {/* semester start */}
                <div className="form-floating mb-3 mx-5">
                    <input type="text" name="semester" className="form-control" id="floatingInput semester" placeholder="1st" value={userRegistration.semester} onChange={HandleInput} />
                    <label htmlFor="floatingInput">Semester</label>
                </div>
                {/* semester end */}
                {/* Hobbies start */}
                <div className="form-floating mb-3 mx-5">
                    <input type="text" name="hobbies" className="form-control" id="floatingInput hobbies" placeholder="xyz" value={userRegistration.hobbies} onChange={HandleInput} />
                    <label htmlFor="floatingInput">Hobbies</label>
                </div>
                {/* Hobbies end */}
                {/* About Yourself start */}
                <div className="form-floating mb-3 mx-5">
                    <textarea name="aboutYourself" className="form-control" id="floatingInput hobbies" cols="30" rows="10" placeholder="About Yourself" value={userRegistration.aboutYourself} onChange={HandleInput}></textarea>
                    <label htmlFor="floatingInput">Why should we consider you?</label>
                </div>
                {/* About Yourself end */}
                {/* submit button start */}
                <div className="form-floating mb-3 mx-5">
                    <button type="submit" className='button-styling'>Register Now</button>
                </div>
                {/* submit button end */}
            </form>
        </>
    )
}

export default SocietyRegistration