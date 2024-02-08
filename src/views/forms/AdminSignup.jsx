import React, { useState } from 'react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'

const AdminSignup = () => {
    const toast = useToast()
    //use state hook to update state 
    const [signUp, setSignUp] = useState({
        name: '',
        email: '',
        password: '',
    })

    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSignUp({ ...signUp, [name]: value });
    }

    const [records, setRecords] = useState([]);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const newRecord = { ...signUp, id: new Date().getTime().toString() };
        setRecords([...records, newRecord]);

        setSignUp({
            name: '',
            email: '',
            password: '',
        })

        const response = await axios.post(`http://localhost:3000/api/v1/auth/sign-up`, signUp);
    
        if (response.data.success) {
            toast({
                title: 'Signed Up',
                description: "Admin successfully Signed Up",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        } else {
            toast({
                title: 'Error',
                description: 'Admin with this email address already exists',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }
    return (
        <>
            <div className="new-student">
                <form action="" onSubmit={HandleSubmit} className="new-student-form py-5">
                    {/* name start */}
                    <div className="form-floating mb-3 mx-5">
                        <input type="name" name="name" className="form-control" id="floatingInput name" placeholder="John Doe" value={signUp.name} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    {/* name end */}
                    {/* email start */}
                    <div className="form-floating mb-3 mx-5">
                        <input type="email" name="email" className="form-control" id="floatingInput email" placeholder="name@example.com" value={signUp.email} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {/* email end */}
                    {/* password start */}
                    <div className="form-floating mb-3 mx-5">
                        <input type="password" name="password" className="form-control" id="floatingInput password" placeholder="****" value={signUp.password} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    {/* password end */}
                    <button type="submit" className="form-floating mb-3 mx-5 button-styling">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default AdminSignup