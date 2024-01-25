import React from 'react'
import chairmanCS from "../assets/Images/favicon_io/chairmanCS.jpeg"
import coordinatorCS from "../assets/Images/favicon_io/coordinatorCS.png"
import AbdulMateen from "../assets/Images/favicon_io/abdulmateen.png"
import UmairBabar from "../assets/Images/favicon_io/umairbabar.png"
import LaeeqAslam from "../assets/Images/favicon_io/laeeqaslam.png"
import NazarKhan from "../assets/Images/favicon_io/nazarkhan.png"
import EshaAftab from "../assets/Images/favicon_io/eshaaftab.png"
import "../App.css"

const ComputerScience = () => {
  return (
    <>
      <div className="departments">
        <div className="top-heading py-3">
          <h2>Department of Computer Science</h2>
        </div>
        <div className="chairman-info">
          <div className="chairman-image">
            <figure>
              <img src={chairmanCS} alt="Chairman Cs" />
              <figcaption>Professor Dr. Shahzad Sarwar</figcaption>
            </figure>
          </div>
          <div className="qualifications">
            <ul>
              <li>Chairman Department of Computer Science</li>
              <li>Professor</li>
              <li>PhD Electrical Engineering and IT, Vienna University of Technology Austria</li>
              <li>MS Computer Science, LUMS Lahore</li>
              <li>B.Sc Civil Engineering, UET Taxila</li>
              <li><b>Research and Training Interests:</b>Internet of Things (IoT), Machine-to-Machine (M2M) Communication, Data-centric Networking, and Software Defined Networks (SDNs)</li>
              <li><b>Research Lab:</b>Modern Networking Lab(MNL)</li>
              <li><b>Email:</b>Principal@pucit.edu.pk, S.sarwar@pucit.edu.pk, chairman.dcs@pucit.edu.pk.</li>
            </ul>
          </div>
        </div>
        <div className="offered-programs">
          <div className="bs-cs">
            <h2 className='top-heading py-3 no-background'>BS Computer Science</h2>
            <ul className="degree-objectives">
              <h5 className='px-3 py-3'>Degree Objectives</h5>
              <li className='py-1'>Build a strong foundation in theoretical concepts in computing and software</li>
              <li className='py-1'>Provide a system-wide perspective of hardware and low-level software design</li>
              <li className='py-1'>Prepare students for effective oral and technical skills</li>
              <li className='py-1'>Foster a sense of professional and ethical practices</li>
              <li className='py-1'>Develop proficiency in designing and analyzing algorithms for building efficient softwares</li>
            </ul>
          </div>
          <div className="facult-cs">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={2000}>
                  <div className="faculty-members">
                    <div className="image-name">
                      <figure>
                        <img src={chairmanCS} className="d-block w-100" alt="..." />
                        <figcaption>Dr Shahzad Sarwar</figcaption>
                      </figure>
                    </div>
                    <div className="qualifications">
                      <ul>
                        <li>Chairman Department of Computer Science</li>
                        <li>Professor</li>
                        <li>PhD Electrical Engineering and IT, Vienna University of Technology Austria</li>
                        <li>MS Computer Science, LUMS Lahore</li>
                        <li>B.Sc Civil Engineering, UET Taxila</li>
                        <li><b>Research and Training Interests:</b>Internet of Things (IoT), Machine-to-Machine (M2M) Communication, Data-centric Networking, and Software Defined Networks (SDNs)</li>
                        <li><b>Research Lab:</b>Modern Networking Lab(MNL)</li>
                        <li><b>Email:</b>Principal@pucit.edu.pk, S.sarwar@pucit.edu.pk, chairman.dcs@pucit.edu.pk.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <div className="faculty-members">
                    <div className="image-name">
                      <figure>
                        <img src={coordinatorCS} className="d-block w-100" alt="..." />
                        <figcaption>Ch Ejaz Ashraf</figcaption>
                      </figure>
                    </div>
                    <div className="qualifications">
                      <ul>
                        <li>Chairman Department of Computer Science</li>
                        <li>Professor</li>
                        <li>PhD Electrical Engineering and IT, Vienna University of Technology Austria</li>
                        <li>MS Computer Science, LUMS Lahore</li>
                        <li>B.Sc Civil Engineering, UET Taxila</li>
                        <li><b>Research and Training Interests:</b>Internet of Things (IoT), Machine-to-Machine (M2M) Communication, Data-centric Networking, and Software Defined Networks (SDNs)</li>
                        <li><b>Research Lab:</b>Modern Networking Lab(MNL)</li>
                        <li><b>Email:</b>Principal@pucit.edu.pk, S.sarwar@pucit.edu.pk, chairman.dcs@pucit.edu.pk.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <div className="faculty-members">
                    <div className="image-name">
                      <figure>
                        <img src={AbdulMateen} className="d-block w-100" alt="..." />
                        <figcaption>Professor Abdul Mateen</figcaption>
                      </figure>
                    </div>
                    <div className="qualifications">
                      <ul>
                        <li>Chairman Department of Computer Science</li>
                        <li>Professor</li>
                        <li>PhD Electrical Engineering and IT, Vienna University of Technology Austria</li>
                        <li>MS Computer Science, LUMS Lahore</li>
                        <li>B.Sc Civil Engineering, UET Taxila</li>
                        <li><b>Research and Training Interests:</b>Internet of Things (IoT), Machine-to-Machine (M2M) Communication, Data-centric Networking, and Software Defined Networks (SDNs)</li>
                        <li><b>Research Lab:</b>Modern Networking Lab(MNL)</li>
                        <li><b>Email:</b>Principal@pucit.edu.pk, S.sarwar@pucit.edu.pk, chairman.dcs@pucit.edu.pk.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <div className="faculty-members">
                    <div className="image-name">
                      <figure>
                        <img src={UmairBabar} className="d-block w-100" alt="..." />
                        <figcaption>Professor Umair Babar</figcaption>
                      </figure>
                    </div>
                    <div className="qualifications">
                      <ul>
                        <li>Chairman Department of Computer Science</li>
                        <li>Professor</li>
                        <li>PhD Electrical Engineering and IT, Vienna University of Technology Austria</li>
                        <li>MS Computer Science, LUMS Lahore</li>
                        <li>B.Sc Civil Engineering, UET Taxila</li>
                        <li><b>Research and Training Interests:</b>Internet of Things (IoT), Machine-to-Machine (M2M) Communication, Data-centric Networking, and Software Defined Networks (SDNs)</li>
                        <li><b>Research Lab:</b>Modern Networking Lab(MNL)</li>
                        <li><b>Email:</b>Principal@pucit.edu.pk, S.sarwar@pucit.edu.pk, chairman.dcs@pucit.edu.pk.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <div className="faculty-members">
                    <div className="image-name">
                      <figure>
                        <img src={LaeeqAslam} className="d-block w-100" alt="..." />
                        <figcaption>Professor Dr Laeeq Aslam</figcaption>
                      </figure>
                    </div>
                    <div className="qualifications">
                      <ul>
                        <li>Chairman Department of Computer Science</li>
                        <li>Professor</li>
                        <li>PhD Electrical Engineering and IT, Vienna University of Technology Austria</li>
                        <li>MS Computer Science, LUMS Lahore</li>
                        <li>B.Sc Civil Engineering, UET Taxila</li>
                        <li><b>Research and Training Interests:</b>Internet of Things (IoT), Machine-to-Machine (M2M) Communication, Data-centric Networking, and Software Defined Networks (SDNs)</li>
                        <li><b>Research Lab:</b>Modern Networking Lab(MNL)</li>
                        <li><b>Email:</b>Principal@pucit.edu.pk, S.sarwar@pucit.edu.pk, chairman.dcs@pucit.edu.pk.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <div className="faculty-members">
                    <div className="image-name">
                      <figure>
                        <img src={NazarKhan} className="d-block w-100" alt="..." />
                        <figcaption>Professor Dr Nazar Khan</figcaption>
                      </figure>
                    </div>
                    <div className="qualifications">
                      <ul>
                        <li>Chairman Department of Computer Science</li>
                        <li>Professor</li>
                        <li>PhD Electrical Engineering and IT, Vienna University of Technology Austria</li>
                        <li>MS Computer Science, LUMS Lahore</li>
                        <li>B.Sc Civil Engineering, UET Taxila</li>
                        <li><b>Research and Training Interests:</b>Internet of Things (IoT), Machine-to-Machine (M2M) Communication, Data-centric Networking, and Software Defined Networks (SDNs)</li>
                        <li><b>Research Lab:</b>Modern Networking Lab(MNL)</li>
                        <li><b>Email:</b>Principal@pucit.edu.pk, S.sarwar@pucit.edu.pk, chairman.dcs@pucit.edu.pk.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <div className="faculty-members">
                    <div className="image-name">
                      <figure>
                        <img src={EshaAftab} className="d-block w-100" alt="..." />
                        <figcaption>Professor Dr Esha Aftab</figcaption>
                      </figure>
                    </div>
                    <div className="qualifications">
                      <ul>
                        <li>Chairman Department of Computer Science</li>
                        <li>Professor</li>
                        <li>PhD Electrical Engineering and IT, Vienna University of Technology Austria</li>
                        <li>MS Computer Science, LUMS Lahore</li>
                        <li>B.Sc Civil Engineering, UET Taxila</li>
                        <li><b>Research and Training Interests:</b>Internet of Things (IoT), Machine-to-Machine (M2M) Communication, Data-centric Networking, and Software Defined Networks (SDNs)</li>
                        <li><b>Research Lab:</b>Modern Networking Lab(MNL)</li>
                        <li><b>Email:</b>Principal@pucit.edu.pk, S.sarwar@pucit.edu.pk, chairman.dcs@pucit.edu.pk.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ComputerScience