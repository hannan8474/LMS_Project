import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"
import arif from "../assets/Images/favicon_io/arif.png"
import kamran from "../assets/Images/favicon_io/kamran.png"
import kashif from "../assets/Images/favicon_io/kashif.png"
import master from "../assets/Images/favicon_io/master.png"
import img from "../assets/Images/favicon_io/img.jpg"
import img1 from "../assets/Images/favicon_io/img-1.jpg"
import img2 from "../assets/Images/favicon_io/img-2.jpeg"
import img3 from "../assets/Images/favicon_io/img-3.jpg"
import img4 from "../assets/Images/favicon_io/img-4.jpg"
import img5 from "../assets/Images/favicon_io/img-5.jpg"
import img6 from "../assets/Images/favicon_io/img-6.jpg"

const LiterarySociety = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const HandleClick = () => {
        setButtonClicked(true);
    }
    const HandleBack = () => {
        setButtonClicked(false);
    }
    const [charIndex, setCharIndex] = useState(0);
    let text = "FCIT Sports Society"
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCharIndex((prevIndex) => (prevIndex < text.length ? prevIndex + 1 : 0));
        }, 100); // Adjust the delay between revealing each letter

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [text]);
    return (
        <>
            <div className="top-title">
                <div className="background-opacity">
                    <h2 className='society-names py-3'>
                        <div className="animated-line">
                            <span className="individual-letter">{text.slice(0, charIndex)}</span>
                        </div>
                    </h2>
                </div>
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
                    <p><i>"The Sports Society organizes various student and faculty (both male and female) sports activities in the College, including Cricket, Badminton, Table Tennis, Athletics, Chess, and Tug-of-War. It organizes the yearly PUCIT Olympics, a mega annual sports festival. The society also facilitates students to take part in the various sports competitions held at the university and inter university levels."</i></p>
                    <ul>
                        <li>It will be the part of our duties to cover all types of on campus and outside campus activities and events.</li>
                        <li>PUMS will promote the image of PUCIT locally and internationally via different use of media channels.</li>
                        <li>Students are the main body of PUMS and they will contribute stories, photos, videos and articles about PUCIT which covers events, celebrations and different activities.</li>
                        <li>PUMS will provide the students with the opportunities to express and develop their ideas and talent through media, technology and communication.</li>
                        <li>PUMS will be led by individuals who represent students in general from all departments and will perform their duties with spirit of responsibility and great leadership skills to accomplish approves task and activities.</li>
                        <li>PUMS will combine several skills and ideas to end up with creative product.</li>
                        <li>Any Student who is creative and willing to learn is welcomed to join and become a member of this ever-growing group.</li>
                    </ul>
                    <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src={img} alt="Image" classname="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src={img1} alt="Image" classname="d-block w-100" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={img2} alt="Image" classname="d-block w-100" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={img3} alt="Image" classname="d-block w-100" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={img4} alt="Image" classname="d-block w-100" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={img5} alt="Image" classname="d-block w-100" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={img6} alt="Image" classname="d-block w-100" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                        <p className="py-3">FCIT Sports Society conducted a Sports League that consisted of two tournaments, Cricket and Badminton, last month that proved to be a huge success. The event was initiated with a small opening ceremony where the participants were told about the rules of the game. The games were started immediately after the opening ceremony. The cricket tournament was held at Khalid Bin Waleed Hostel’s ground and was for boys only. The badminton tournament was only for girls that was conducted at the badminton court in FCIT Old Campus. Participants showed great zeal for the game and every match of cricket and badminton was worth watching. All the participants showcased their skills and fought well to take the top position. On top of that, the audience was also very zealous and motivating towards their favorite players and teams and their cheers helped the players to showcase their talent in an even better way. Both tournaments received an extensive response from the students and no decorum of the university was disturbed at all. The conduction of this Sports League proved to be a breath of fresh air for students in their hectic routines. FCIT Sports Society encourages all the students to extravagantly participate in different games and leagues to enjoy these off-work times to the fullest.</p>
                    </div>
                    <div className="society-registration">
                        {buttonClicked ?
                            // It will render after cliking the button
                            (<div><Outlet /><button className="button-styling" onClick={HandleBack}>Go Back!</button></div>) :
                            // It will reder before the button is clicked
                            (<button className="button-styling" onClick={HandleClick}><Link to="/literary-society/society-registration">Registration, One click Away!</Link></button>)}
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

export default LiterarySociety