import React, { useState, useEffect } from 'react'
import "../../style/loginForm.css"
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import postApiService from '../../services/postApiService'
import { endPoints } from '../../constants/urls/urls'
import "../../style/loginForm.css"
import axios from 'axios'

const LoginForm = () => {
    const navigate = useNavigate();
    const toast = useToast();
    let authTokenStudent = localStorage.getItem('authTokenStudent');

    useEffect(() => {
        if (authTokenStudent)
        {
            navigate ('/student-portal');
        }
    }, [authTokenStudent])
    
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });
    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value });
    }
    const [records, setRecords] = useState([]);
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const newRecord = { ...login, id: new Date().getTime().toString() };
        setRecords([...records, newRecord]);
        setLogin({ email: '', password: '' });
        // const response = await axios.post(`http://localhost:3000/api/v1/auth/student-login`, login);
        const response = await postApiService(endPoints.STUDENT_LOGIN, login);
        console.log(response);
        authTokenStudent = response.data.authToken;
        localStorage.setItem('authTokenStudent', authTokenStudent);

        if (response.data.success) {
            toast({
                title: 'Logged in',
                description: "Student successfully Logged In",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            navigate ('/student-portal');
        } else {
            toast({
                title: 'Error',
                description: 'Incorrect email or password',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }
    return (
        <>
            <div className="new-student">
                <form action="" onSubmit={HandleSubmit} className="login-form">
                    {/* email start */}
                    <div className="form-floating mb-3" style={{width:'100%'}}>
                        <input type="email" name="email" className="form-control" id="floatingInput email" placeholder="name@example.com" value={login.email} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {/* email end */}
                    {/* password start */}
                    <div className="form-floating mb-3" style={{width:'100%'}}>
                        <input type="password" name="password" className="form-control" id="floatingInput password" placeholder="****" value={login.password} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    {/* password end */}
                    <button type="submit" className="form-floating mb-3 button-styling">Login</button>
                </form>
            </div>
        </>
    )
}

export default LoginForm