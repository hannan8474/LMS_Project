import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Images/favicon_io/logo-new.png"
import "../style/responsive.css"
import "../style/footer.css"
import "../App.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="footer-data">
                <div className='footer'>
                    <div className="logo-footer">
                        <img src={logo} className='image-footer' alt="Image" />
                    </div>
                    <div className="icons">
                        <Link to="https://www.facebook.com" className="fa fa-facebook icon" target="_blank"></Link>
                        <Link to="https://www.twitter.com" className="fa fa-twitter icon" target='_blank'></Link>
                        <Link to="https://www.instagram.com" className="fa fa-instagram icon" target='_blank'></Link>
                    </div>
                </div>
                <div className='copyright'>
                    <p className='copyright-text'>copyright &copy; {currentYear} PUCIT. All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer