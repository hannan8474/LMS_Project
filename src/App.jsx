import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Department from './pages/Department'
import InformationTechnology from "./pages/InformationTechnology"
import SoftwareEngineering from "./pages/SoftwareEngineering"
import ComputerScience from "./pages/ComputerScience"
import DataScience from "./pages/DataScience"
import StudentPortal from "./pages/StudentPortal"
import StudentSocieties from "./pages/StudentSocieties"
import ErrorPage from "./pages/ErrorPage"
import Faculty from './pages/Faculty'
import NavBar from './layout/NavBar'
import Footer from "./layout/Footer"
import MediaSociety from './pages/MediaSociety'
import SocietyRegistration from './views/forms/SocietyRegistration'

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/department' element={<Department />}>
            <Route path='computer-science' element={<ComputerScience />} />
            <Route path='software-engineering' element={<SoftwareEngineering />} />
            <Route path='information-technology' element={<InformationTechnology />} />
            <Route path='data-science' element={<DataScience />} />
          </Route>
          <Route path='/student-portal' element={<StudentPortal />} />
          <Route path='/student-societies' element={<StudentSocieties />} />
          <Route path='/faculty' element={<Faculty />} />
          <Route path='/media-society' element={<MediaSociety />}>
            <Route path='society-registration' element={<SocietyRegistration/>}/>
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
