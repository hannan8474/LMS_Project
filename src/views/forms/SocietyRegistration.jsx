import React, { useState } from 'react'
import "../../App.css"

const SocietyRegistration = () => {
    const [userRegistration, setuserRegistration] = useState({
        name: '',
        rollNumber: '',
        department: '',
        semester: '',
        hobbies: '',
    });
    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRegistration({ ...userRegistration, [name]: value });
    }
    const [records, setrecords] = useState([]);
    const HandleSubmit = (e) => {
        e.preventDefault();
        const NewRecord = { ...userRegistration, id: new Date().getTime().toString() };
        setrecords([...records, NewRecord]);
        setuserRegistration({
            name: '',
            rollNumber: '',
            department: '',
            semester: '',
            hobbies: '',
        });
    }
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
                {/* submit button start */}
                <div className="form-floating mb-3 mx-5">
                    <button type="submit" className='button-styling'>Register Now</button>
                </div>
                {/* submit button end */}
            </form>
            {/* Shows the form entries */}
            <div>
                {
                    records.map((curElem) => {
                        return (
                            <div key={curElem.id} className={forms.ShowData}>
                                <p>{curElem.name}</p>
                                <p>{curElem.rollNumber}</p>
                                <p>{curElem.department}</p>
                                <p>{curElem.semester}</p>
                                <p>{curElem.hobbies}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SocietyRegistration