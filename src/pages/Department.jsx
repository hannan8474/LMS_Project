import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Department = () => {
    return (
        <>
            <h3>These are our departments</h3>
            <li><Link to="ComputerScience">Computer Science</Link></li>
            <li><Link to="SoftwareEngineering">Software Engineering</Link></li>
            <li><Link to="InformationTechnology">Information Technology</Link></li>
            <li><Link to="DataScience">Data Science</Link></li>
            <Outlet />
        </>
    )
}

export default Department