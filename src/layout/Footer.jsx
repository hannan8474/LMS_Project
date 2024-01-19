import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import "../style/responsive.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className='footer'>
                <div className='copyright'>
                    <p>copyright &copy; {currentYear} PUCIT. All rights reserved</p>
                </div>
                <div className="icons">
                    <Link to="https://www.facebook.com" className="fa fa-facebook icon" target = "_blank"></Link>
                    <Link to="https://www.twitter.com" className="fa fa-twitter icon" target='_blank'></Link>
                    <Link to="https://www.instagram.com" className="fa fa-instagram icon" target='_blank'></Link>
                </div>
            </div>
        </>
    )
}

export default Footer