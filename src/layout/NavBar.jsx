import React from 'react'
import { NavLink } from "react-router-dom"
import logo from "../assets/Images/favicon_io/logo-new.png"
import "../style/navBar.css"

// how to write modular css in react js

const NavBar = () => {
    return (
        <>
            <div className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src={logo} alt="Fcit_Logo" className='image-footer'/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-3 mx-3">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown px-3 mx-3">
                                <NavLink className="nav-link dropdown-toggle" to="/department" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Departments
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/computer-science">Computer Science</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/software-Engineering">Software Engineering</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/information-technology">Information Technology</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/data-science">Data Science</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item px-3 mx-3">
                                <NavLink className="nav-link" to="/student-societies">Student Societies</NavLink>
                            </li>
                            <li className="nav-item px-3 mx-3">
                                <NavLink className="nav-link" to="/auth/student-login">Student Portal</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </>

    )
}

export default NavBar