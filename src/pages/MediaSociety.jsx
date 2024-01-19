import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"
import arif from "../assets/Images/favicon_io/arif.png"
import kamran from "../assets/Images/favicon_io/kamran.png"
import kashif from "../assets/Images/favicon_io/kashif.png"
import master from "../assets/Images/favicon_io/master.png"

const MediaSociety = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const HandleClick = () => {
        setButtonClicked(true);
    }
    const HandleBack = () => {
        setButtonClicked(false);
    }
    return (
        <>
            <div className="top-title">
                <h2 className='society-names py-3'>FCIT Media Society</h2>
            </div>
            <div className="society-body">
                <div className="patrons px-5">
                    <div className="patron-info">
                        <img src={arif} alt="Arif Butt" />
                        <p><b>MAJR. RETD. DR. Muhammad Arif Butt</b>, Associate Professor</p>
                    </div>
                    <div className="patron-info">
                        <img src={kamran} alt="Arif Butt" />
                        <p><b>Dr. Muhammad Kamran Malik</b>, Associate Professor</p>
                    </div>
                    <div className="patron-info">
                        <img src={kashif} alt="Arif Butt" />
                        <p><b>Kashif Murtaza</b>, Assistant Professor</p>
                    </div>
                    <div className="patron-info">
                        <img src={master} alt="Arif Butt" />
                        <p><b>Muhammad Asim Siddique</b>, Web Master</p>
                    </div>
                </div>
                <div className="society-content px-5">
                    <p><i>The basic idea is to provide students with an opportunity to develop life skills which will enable them to analyze the forms of modern communication and to help students to become wise consumers of media. We want to represent PUCIT and the life at PUCIT.</i></p>
                    <ul>
                        <li>It will be the part of our duties to cover all types of on campus and outside campus activities and events.</li>
                        <li>PUMS will promote the image of PUCIT locally and internationally via different use of media channels.</li>
                        <li>Students are the main body of PUMS and they will contribute stories, photos, videos and articles about PUCIT which covers events, celebrations and different activities.</li>
                        <li>PUMS will provide the students with the opportunities to express and develop their ideas and talent through media, technology and communication.</li>
                        <li>PUMS will be led by individuals who represent students in general from all departments and will perform their duties with spirit of responsibility and great leadership skills to accomplish approves task and activities.</li>
                        <li>PUMS will combine several skills and ideas to end up with creative product.</li>
                        <li>Any Student who is creative and willing to learn is welcomed to join and become a member of this ever-growing group.</li>
                    </ul>
                    <div className="society-registration">
                        {buttonClicked ?
                            // It will render after cliking the button
                            (<div><Outlet /><button className="button-styling" onClick={HandleBack}>Go Back!</button></div>) :
                            // It will reder before the button is clicked
                            (<button className="button-styling" onClick={HandleClick}><Link to="/media-society/society-registration">Registration, One click Away!</Link></button>)}
                    </div>

                </div>
                <div className="contact px-5">
                    <ul>
                        <li>
                            <b>Emails</b>:
                            <ul>
                                <Link to="https://mail.google.com"><li>arif@pucit.edu.pk</li></Link>
                                <Link to="https://mail.google.com"><li>kamran@pucit.edu.pk</li></Link>
                                <Link to="https://mail.google.com"><li>kashif@pucit.edu.pk</li></Link>
                                <Link to="https://mail.google.com"><li>webmaster@pucit.edu.pk</li></Link>
                            </ul>
                        </li>
                        <Link to="https://www.facebook.com/pucit.media.society"><li><b>Our Facebook Page</b></li></Link>
                        <Link to="https://www.instagram.com/pucit.media.society"><li><b>Our Instagram Page</b></li></Link>
                        <Link to="https://www.twitter.com/pucit.media.society"><li><b>Our Twitter Page</b></li></Link>
                        <Link to="https://www.linkedin.com/pucit.media.society"><li><b>Our Linkedin Page</b></li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MediaSociety