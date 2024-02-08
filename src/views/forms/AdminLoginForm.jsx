import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const AdminLoginForm = () => {
    const toast = useToast()
    const navigate = useNavigate();
    let authTokenAdmin = localStorage.getItem('authTokenAdmin');
    useEffect(() => {
        if (authTokenAdmin)
        {
            navigate('/add-student');
        }
    
    }, [authTokenAdmin]);

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

        const response = await axios.post(`http://localhost:3000/api/v1/auth/login`, login);

        authTokenAdmin = response.data.authToken;
        localStorage.setItem('authTokenAdmin', authTokenAdmin);

        if (response.data.success) {
            toast({
                title: 'Logged in',
                description: "Successfully Logged In",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            navigate('/add-student');
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
                <form action="" onSubmit={HandleSubmit} className="new-student-form py-5">
                    {/* email start */}
                    <div className="form-floating mb-3 mx-5" style={{widht:'75%'}}>
                        <input type="email" name="email" className="form-control" id="floatingInput email" placeholder="name@example.com" value={login.email} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {/* email end */}
                    {/* password start */}
                    <div className="form-floating mb-3 mx-5" style={{widht:'75%'}}>
                        <input type="password" name="password" className="form-control" id="floatingInput password" placeholder="****" value={login.password} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    {/* password end */}
                    <button type="submit" className="form-floating mb-3 mx-5 button-styling">Login</button>
                </form>
            </div>
        </>
    )
}

export default AdminLoginForm