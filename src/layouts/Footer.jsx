import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className='footer'>
                <div className='copyright'>
                    {Date().getFullYear}
                    <p>copyright &copy; {currentYear} PUCIT. All rights reserved</p>
                </div>
                <div className="icons">
                    <Link to="#" className="fa fa-facebook"></Link>
                    <Link to="#" className="fa fa-twitter"></Link>
                    <Link to="#" className="fa fa-instagram"></Link>
                </div>
            </div>
        </>
    )
}

export default Footer