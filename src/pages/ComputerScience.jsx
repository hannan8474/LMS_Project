import React from 'react'
import { Link } from 'react-router-dom'
import "../style/department.css"
import "../App.css"
import "../style/responsive.css"
import chairmanCS from "../assets/Images/favicon_io/chairman.gif"
import department from "../assets/Images/favicon_io/IMG_0907.jpg"
import coordinatorCS from "../assets/Images/favicon_io/coordinatorCS.png"
import AbdulMateen from "../assets/Images/favicon_io/abdulmateen.png"
import careerfair from "../assets/Images/favicon_io/careerfair.png"
import fairregistration from "../assets/Images/favicon_io/CareerFair2024.png"

const ComputerScience = () => {
  return (
    <>
      {/* introductory messages start */}
      <div className="notes">
        <div className="welcome-notes">
          <div className="card principal">
            <div className="card-img">
              <figure className='text-center'>
                <img src={chairmanCS} className="card-img-top" alt="Chairman CS" style={{ width: '200px', height: '200px' }} />
                <figcaption>Dr Shahzad Sarwar</figcaption>
              </figure>
            </div>
            <div className="card-body">
              <div className="message-principal"><h5 className="card-title">Principal Message</h5>
                <p>The present era of rapid technological evolution warrants the development of competent human resources with a passion to excel in the respective fields and serve the nation. FCIT is committed to provide high-quality engineering education in Pakistan with a focus on the socio-economic uplift of the country. The School offers postgraduate and undergraduate Programmes covering the disciplines of Electrical, Telecommunications, and Information Technology. Our interdisciplinary Programmes blend hardware, firmware, and software domains to equip students with tools to solve real-world problems and take up challenges of professional life.</p></div>
            </div>
          </div>
          <div className="card department">
            <div className="card-img">
              <img src={department} className="card-img-top" alt="Computer Science" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Department of Computer Science</h5>
              <p>In the current age of rapid progress, only those fired with a passion to excel can aspire for a respectable survival. We at Department of CS are committed to provide world class education and research opportunities in Pakistan. The School offers postgraduate and undergraduate programmes covering the disciplines of electrical engineering, software engineering and computer science. These programmes blending digital systems, communication technologies, power and control systems, Artificial Intelligence, data science, information security, robotics, and other information</p>
            </div>
          </div>
        </div>
      </div>
      {/* introductory messages end */}
      {/* leadership of cs starts */}
      <div className="leadership">
        <div className="leadership-heading">
          <h2 className='text-white text-center py-4'>Department of CS leadership</h2>
        </div>
        <div className="leadership-container">
          <div className="leadership-data p-3">
            <div className="name-img text-center">
              <div className="name-designation py-3">
                <div className="designation"><h5 className='p-2 text-center'>Dean - Department of Computer Science</h5></div>
                <div className="name"><p>Dr Shahzad Sarwar</p></div>
              </div>
              <div className="img"><img src={chairmanCS} alt="Chairman of Cs" style={{ width: '200px', height: '150px' }} /></div>
            </div>
            <div className="specialization text-white">
              <h3>Email: </h3><p><Link to="www.gmail.com">dean@pucti.edu.pk</Link></p>
              <h3>Specialisation: </h3><p>Internet of Things (IoT), Machine-to-Machine (M2M) Communication, Data-centric Networking, and Software Defined Networks (SDNs)</p>
            </div>
          </div>
          <div className="leadership-data p-3">
            <div className="name-img text-center">
              <div className="name-designation py-3">
                <div className="designation"><h5 className='p-2 text-center'>Coordinator CS-Department of Computer Science</h5></div>
                <div className="name"><p>Ch Ejaz Ashraf</p></div>
              </div>
              <div className="img"><img src={coordinatorCS} alt="Coordinator of Cs" style={{ width: '200px', height: '150px' }} /></div>
            </div>
            <div className="specialization text-white">
              <h3>Email: </h3><p><Link to="www.gmail.com">ejaz@pucti.edu.pk</Link></p>
              <h3>Specialisation: </h3><p>Software Engineering, Software Quality Assurance, Software Project Management</p>
            </div>
          </div>
          <div className="leadership-data p-3">
            <div className="name-img text-center">
              <div className="name-designation py-3">
                <div className="designation"><h5 className='p-2 text-center'>Coach ICPC - Department of Computer Science</h5></div>
                <div className="name"><p>Abdul Mateen</p></div>
              </div>
              <div className="img"><img src={AbdulMateen} alt="Coordinator of Cs" style={{ width: '200px', height: '150px' }} /></div>
            </div>
            <div className="specialization text-white">
              <h3>Email: </h3><p><Link to="www.gmail.com">amateen@pucti.edu.pk</Link></p>
              <h3>Specialisation: </h3><p>Programming, Data Structures</p>
            </div>
          </div>
        </div>
      </div>
      {/* leadership of cs ends */}
      {/* Programs start */}
      <div className="programs">
        <div className="undergraduate my-2 mx-4" style={{ border: '2px solid black' }}>
          <div className="heading p-4 text-center">
            Under Graduate Programs
          </div>
          <div className="details">
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
          </div>
        </div>
        <div className="postgraduate my-2 mx-4" style={{ border: '2px solid black' }}>
          <div className="heading p-4 text-center">
            Post Graduate Programs
          </div>
          <div className="details">
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
            <p className='individual-program py-3 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis? Tempore, repellendus?</p>
          </div>
        </div>
      </div>
      {/* Programs end */}
      {/* Events start */}
      <div className="fcit-events">
        <h2 className="top-heading py-3"><span className='important'>Events</span></h2>
        <div className="main-events">
          <div className="last-registration-date p-4">
            <img src={careerfair} alt="Poster for career fair" style={{ width: '100%' }} />
          </div>
          <div className="career-fair p-4">
            <img src={fairregistration} alt="Poster for registration" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ComputerScience