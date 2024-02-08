import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../App.css"
import "../style/societies.css"
import "../style/department.css"
import arif from "../assets/Images/favicon_io/arif.png"
import kamran from "../assets/Images/favicon_io/kamran.png"
import kashif from "../assets/Images/favicon_io/kashif.png"
import img from "../assets/Images/favicon_io/img.jpg"
import img1 from "../assets/Images/favicon_io/img-1.jpg"
import img2 from "../assets/Images/favicon_io/img-2.jpeg"
import img3 from "../assets/Images/favicon_io/img-3.jpg"
import img4 from "../assets/Images/favicon_io/img-4.jpg"
import img5 from "../assets/Images/favicon_io/img-5.jpg"
import img6 from "../assets/Images/favicon_io/img-6.jpg"


const MediaSociety = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const HandleClick = () => {
        setButtonClicked(true);
    }
    const HandleBack = () => {
        setButtonClicked(false);
    }
    const [charIndex, setCharIndex] = useState(0);
    let text = "FCIT Media Society"
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
                            <span className="individual-letter text-black">{text.slice(0, charIndex)}</span>
                        </div>
                    </h2>
                </div>
            </div>
            <div className="society-body">
                {/* society introduction and aims starts */}
                <div className="society-content p-5">
                    <p><i>"The basic idea is to provide students with an opportunity to develop life skills which will enable them to analyze the forms of modern communication and to help students to become wise consumers of media. We want to represent PUCIT and the life at PUCIT."</i></p>
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
                    </div>
                        <p className="py-3">FCIT Sports Society conducted a Sports League that consisted of two tournaments, Cricket and Badminton, last month that proved to be a huge success. The event was initiated with a small opening ceremony where the participants were told about the rules of the game. The games were started immediately after the opening ceremony. The cricket tournament was held at Khalid Bin Waleed Hostel’s ground and was for boys only. The badminton tournament was only for girls that was conducted at the badminton court in FCIT Old Campus. Participants showed great zeal for the game and every match of cricket and badminton was worth watching. All the participants showcased their skills and fought well to take the top position. On top of that, the audience was also very zealous and motivating towards their favorite players and teams and their cheers helped the players to showcase their talent in an even better way. Both tournaments received an extensive response from the students and no decorum of the university was disturbed at all. The conduction of this Sports League proved to be a breath of fresh air for students in their hectic routines. FCIT Sports Society encourages all the students to extravagantly participate in different games and leagues to enjoy these off-work times to the fullest.</p>

                    <div className="society-registration">
                        {buttonClicked ?
                            // It will render after cliking the button
                            (<div><Outlet /><button className="button-styling" onClick={HandleBack}>Go Back!</button></div>) :
                            // It will reder before the button is clicked
                            (<button className="button-styling" onClick={HandleClick}><Link to="/media-society/society-registration">Registration, One click Away!</Link></button>)}
                    </div>
                </div>
                {/* society introduction and aims ends */}
                {/* patrons of media society  starts*/}
                <div className="leadership">
                    <div className="leadership-heading">
                        <h2 className='text-white text-center py-4'>Patrons of FCIT Media Society</h2>
                    </div>
                    <div className="leadership-container">
                        <div className="leadership-data p-3">
                            <div className="name-img text-center">
                                <div className="name-designation py-3">
                                    <div className="designation"><h5 className='p-2 text-center'>Head of PUMS</h5></div>
                                    <div className="name"><p>Major Retd. Dr Muhammad Arif Butt</p></div>
                                </div>
                                <div className="img"><img src={arif} alt="Chairman of Cs" style={{ width: '200px', height: '150px' }} /></div>
                            </div>
                            <div className="specialization text-white">
                                <h3>Email: </h3><p><Link to="www.gmail.com">arif@pucti.edu.pk</Link></p>
                                <h3>Specialisation: </h3><p>Internet of Things (IoT), Machine-to-Machine (M2M) Communication, Data-centric Networking, and Software Defined Networks (SDNs)</p>
                            </div>
                        </div>
                        <div className="leadership-data p-3">
                            <div className="name-img text-center">
                                <div className="name-designation py-3">
                                    <div className="designation"><h5 className='p-2 text-center'>Deputy Head of PUMS</h5></div>
                                    <div className="name"><p>Dr Muhammad Kamran Mirza</p></div>
                                </div>
                                <div className="img"><img src={kamran} alt="Coordinator of Cs" style={{ width: '200px', height: '150px' }} /></div>
                            </div>
                            <div className="specialization text-white">
                                <h3>Email: </h3><p><Link to="www.gmail.com">kamran@pucti.edu.pk</Link></p>
                                <h3>Specialisation: </h3><p>Software Engineering, Software Quality Assurance, Software Project Management</p>
                            </div>
                        </div>
                        <div className="leadership-data p-3">
                            <div className="name-img text-center">
                                <div className="name-designation py-3">
                                    <div className="designation"><h5 className='p-2 text-center'>Event Management Chief of PUMS</h5></div>
                                    <div className="name"><p>Dr Muhammad Kashif Raza</p></div>
                                </div>
                                <div className="img"><img src={kashif} alt="Coordinator of Cs" style={{ width: '200px', height: '150px' }} /></div>
                            </div>
                            <div className="specialization text-white">
                                <h3>Email: </h3><p><Link to="www.gmail.com">kashif@pucti.edu.pk</Link></p>
                                <h3>Specialisation: </h3><p>Programming, Data Structures</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* patrons of media society ends */}

            </div>
        </>
    )
}

export default MediaSociety