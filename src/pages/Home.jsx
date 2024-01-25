import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import chairmanCS from "../assets/Images/favicon_io/chairman.gif"
import chairmanDS from "../assets/Images/favicon_io/DDS_DrShahid.jpg"
import chairmanSE from "../assets/Images/favicon_io/murtaza.jpg"
import chairmanIT from "../assets/Images/favicon_io/swjaffry.jpg"
import "../App.css"
import "../style/responsive.css"
import DeanIntro from '../components/commons/DeanIntro'
import ChairmanseIntro from '../components/commons/ChairmanseIntro'
import ChairmanitIntro from '../components/commons/ChairmanitIntro'
import ChairmandsIntro from '../components/commons/ChairmandsIntro'
import Fcit from '../components/commons/Fcit'
import departmentImage from "../assets/Images/favicon_io/logo-2.png"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set isOpen to true when the component mounts
    setIsOpen(true);

    // Clean up function to set isOpen to false when the component unmounts
    return () => {
      setIsOpen(false);
    };
  }, []);

  const [charIndex, setCharIndex] = useState(0);
  let text = "FACULTY OF COMPUTING AND INFORMATION TECHNOLOGY(FCIT)"
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCharIndex((prevIndex) => (prevIndex < text.length ? prevIndex + 1 : 0));
    }, 100); // Adjust the delay between revealing each letter

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [text]);

  const announcement = {
    color: "red",
  }
  return (
    <>
      {/* Modal Dialog starts */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><h3 style={announcement}>Announcements</h3></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, beatae.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quia illum ut, atque exercitationem fugit nostrum architecto minima dicta fugiat earum, obcaecati, sint natus. Labore quam similique dolorem. Dignissimos voluptas recusandae tenetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Modal Dialog Ends */}
      <div className="main-container">
        <div className="right-section">
          <div className="fcit-info">
            <div className="animated-line">
              <h2 className="top-heading py-3"><span className="individual-letter">{text.slice(0, charIndex)}</span></h2>
            </div>
            <div>
              <Fcit />
            </div>
          </div>
          <div className="messages">
            <h2 className='top-heading py-3'>Dean and chairperson's messages</h2>
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                  <div className='dean-message my-4'>
                    <div className="intro">
                      <img src={chairmanCS} alt="chairman" className="chairman-images" />
                      <p className='names'>
                        <b>Dr Shahzad Sarwar</b> <br />
                        Dean FCIT<br />Chairman Department of Computer Science<br />Email:dean.fcit@pucit.edu.pk
                      </p>

                    </div>
                    <DeanIntro />
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <div className='dean-message my-4'>
                    <div className="intro">
                      <img src={chairmanSE} alt="chairman" className="chairman-images" />
                      <p className='names'><b>Dr Muhammad Murtaza Yousaf</b><br />Chairman Department of Software Engineering<br />Email:chairman.dse@pucit.edu.pk</p>
                    </div>
                    <ChairmanseIntro />
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <div className='dean-message my-4'>
                    <div className="intro">
                      <img src={chairmanIT} alt="chairmanIT" className="chairman-images" />
                      <p className='names'><b>Dr Syed Waqar ul Quonain</b><br />Chairman Department of Information Technology<br />Email:chairman.dit@pucit.edu.pk</p>
                    </div>
                    <ChairmanitIntro />
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <div className='dean-message my-4'>
                    <div className="intro">
                      <img src={chairmanDS} alt="chairmanDS" className="chairman-images" />
                      <p className='names'><b>Dr Shahid Manzoor</b><br />Chairman Department of Data Science<br />Email:chairman.dds@pucit.edu.pk</p>
                    </div>
                    <ChairmandsIntro />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="department-links">

            <div className="department-logo-link cs">
              <figure>
                <img src={departmentImage} alt="Department Image" />
                <figcaption>Department of Computer Science</figcaption>
              </figure>
              <button className="button-styling"><Link to="/computer-science">Read More</Link></button>
            </div>
            <div className="department-logo-link se">
              <figure>
                <img src={departmentImage} alt="Department Image" />
                <figcaption>Department of Software Engineering</figcaption>
              </figure>
              <button className="button-styling"><Link to="/software-engineering">Read More</Link></button>
            </div>
            <div className="department-logo-link it">
              <figure>
                <img src={departmentImage} alt="Department Image" />
                <figcaption>Department of Information Technology</figcaption>
              </figure>
              <button className="button-styling"><Link to="/information-technology">Read More</Link></button>
            </div>
            <div className="department-logo-link ds">
              <figure>
                <img src={departmentImage} alt="Department Image" />
                <figcaption>Department of Data Science</figcaption>
              </figure>
              <button className="button-styling"><Link to="/data-science">Read More</Link></button>
            </div>
          </div>
        </div>
        <div className="notice-board">
          <div className="top-heading-notice">
            <h2 className='top-heading py-3'>
              <span className="notice-color">Notice Board</span>
            </h2>
          </div>
          <div className="recent-updates">
            <ul>
              <li>Time Table of BS (CS, SE, IT,DS ) Fall 2023. (3rd & 5th Semester) & BS (CS, SE, IT,DS ) Spring 2024 (2nd & 8th Semester) <b>January 21, 2024</b></li>
              <li>Public Defense and Viva Voce Examination of PhD Student <b>January 15, 2024</b></li>
              <li>Public Defense and Viva Voce Examination of PhD Student (Rescheduled) <b>January 15, 2024</b></li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, numquam.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam enim quas officia dignissimos ad!</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home