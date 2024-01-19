import React from 'react'
import { Link } from 'react-router-dom'
import media from "../assets/Images/favicon_io/mediasocities.jpg"
import sports from "../assets/Images/favicon_io/sports.jpg"
import literary from "../assets/Images/favicon_io/ls.jpg"
import event from "../assets/Images/favicon_io/ems.jpg"
import computer from "../assets/Images/favicon_io/cs.jpg"
import blood from "../assets/Images/favicon_io/blooddonor.jpg"
import gdsc from "../assets/Images/favicon_io/GDSC-1024x683.png"

const StudentSocieties = () => {
  return (
    <>
      <h2 className='top-heading py-3'>Student Societies</h2>
      <div className="societies-container">
        <div className="society my-3">
          <Link to="/media-society"><img src={media} alt="Title Image" className="society-images"/></Link>
        </div>
        <div className="society my-3">
          <Link to="/"><img src={sports} alt="Title Image" className="society-images"/></Link>
        </div>
        <div className="society my-3">
          <Link to="/"><img src={literary} alt="Title Image" className="society-images"/></Link>
        </div>
        <div className="society my-3">
          <Link to="/"><img src={event} alt="Title Image" className="society-images"/></Link>
        </div>
        <div className="society my-3">
          <Link to="/"><img src={computer} alt="Title Image" className="society-images"/></Link>
        </div>
        <div className="society my-3">
          <Link to="/"><img src={blood} alt="Title Image" className="society-images"/></Link>
        </div>
        <div className="society my-3">
          <Link to="/"><img src={gdsc} alt="Title Image" className="society-images"/></Link>
        </div>
      </div>
    </>
  )
}

export default StudentSocieties