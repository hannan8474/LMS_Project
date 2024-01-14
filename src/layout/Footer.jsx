import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='copyright'>
                    <p>copyright &copy; 2023 PUCIT. All rights reserved</p>
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