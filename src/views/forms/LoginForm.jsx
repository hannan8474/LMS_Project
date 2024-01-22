import React, { useState } from 'react'

const LoginForm = () => {
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
    const HandleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...login, id: new Date().getTime().toString() };
        setRecords([...records, newRecord]);
        console.log(records);
        setLogin({ email: '', password: '' });
    }
    return (
        <>
            <div className="new-student">
                <form action="" onSubmit={HandleSubmit} className="new-student-form py-5">
                    {/* email start */}
                    <div className="form-floating mb-3 mx-5">
                        <input type="email" name="email" className="form-control" id="floatingInput email" placeholder="name@example.com" value={login.email} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {/* email end */}
                    {/* password start */}
                    <div className="form-floating mb-3 mx-5">
                        <input type="password" name="password" className="form-control" id="floatingInput password" placeholder="****" value={login.password} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    {/* password end */}
                    <button type="submit" className="form-floating mb-3 mx-5 button-styling">Login</button>
                </form>
            </div>
            {
                records.map((curElem) => {
                    return (
                        <div key={curElem.id} className="show-student-data">
                            <div className="mx-5 my-5">
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default LoginForm