import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import chairmanCS from "../assets/Images/favicon_io/chairman.gif"
import chairmanDS from "../assets/Images/favicon_io/DDS_DrShahid.jpg"
import chairmanSE from "../assets/Images/favicon_io/murtaza.jpg"
import chairmanIT from "../assets/Images/favicon_io/swjaffry.jpg"
import "../App.css"
import "../style/homeResponsive.css"
import DeanIntro from '../components/commons/DeanIntro'
import ChairmanseIntro from '../components/commons/ChairmanseIntro'
import ChairmanitIntro from '../components/commons/ChairmanitIntro'
import ChairmandsIntro from '../components/commons/ChairmandsIntro'

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
  const contentStyle = {
    color: "grey",
    display: "inline-block",
  }
  const announcement = {
    color: "red",
  }
  return (
    <>
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

      <h2 className='top-heading py-3'>Dean and chairperson's messages</h2>
      <div className='messages m-5'>
        <div className='dean-message my-4'>
          <div className="intro">
            <img src={chairmanCS} alt="chairman" className="chairman-images" />
            <p className='names'><b>Dr Shahzad Sarwar</b></p>
            <p style={contentStyle}>Dean FCIT<br />Chairman Department of Computer Science<br />Email:dean.fcit@pucit.edu.pk</p>
          </div>
          <DeanIntro />
        </div>
        <hr />
        <div className='dean-message my-4'>
          <div className="intro">
            <img src={chairmanSE} alt="chairman" className="chairman-images" />
            <p className='names'><b>Dr Muhammad Murtaza Yousaf</b></p>
            <p style={contentStyle}>Chairman Department of Software Engineering<br />Email:chairman.dse@pucit.edu.pk</p>
          </div>
          <ChairmanseIntro />
        </div>
        <hr />
        <div className='dean-message my-4'>
          <div className="intro">
            <img src={chairmanIT} alt="chairmanIT" className="chairman-images" />
            <p className='names'><b>Dr Syed Waqar ul Quonain</b></p>
            <p style={contentStyle}>Chairman Department of Information Technology<br />Email:chairman.dit@pucit.edu.pk</p>
          </div>
          <ChairmanitIntro />
        </div>
        <hr />
        <div className='dean-message my-4'>
          <div className="intro">
            <img src={chairmanDS} alt="chairmanDS" className="chairman-images" />
            <p className='names'><b>Dr Shahid Manzoor</b></p>
            <p style={contentStyle}>Chairman Department of Data Science<br />Email:chairman.dds@pucit.edu.pk</p>
          </div>
          <ChairmandsIntro />
        </div>
      </div>
    </>
  )
}

export default Home