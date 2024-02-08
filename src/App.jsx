import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import InformationTechnology from "./pages/InformationTechnology"
import SoftwareEngineering from "./pages/SoftwareEngineering"
import ComputerScience from "./pages/ComputerScience"
import DataScience from "./pages/DataScience"
import StudentPortal from "./pages/StudentPortal"
import StudentSocieties from "./pages/StudentSocieties"
import ErrorPage from "./pages/ErrorPage"
import NavBar from './layout/NavBar'
import Footer from "./layout/Footer"
import MediaSociety from './pages/MediaSociety'
import SocietyRegistration from './views/forms/SocietyRegistration'
import SportsSociety from './pages/SportsSociety'
import LiterarySociety from './pages/LiterarySociety'
import Fcit from './components/commons/Fcit'
import AdminSignup from './views/forms/AdminSignup'
import LoginForm from './views/forms/LoginForm'
import AdminLoginForm from './views/forms/AdminLoginForm'
import NewStudent from './views/forms/NewStudent'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/computer-science' element={<ComputerScience />} />
        <Route path='/software-engineering' element={<SoftwareEngineering />} />
        <Route path='/information-technology' element={<InformationTechnology />} />
        <Route path='/data-science' element={<DataScience />} />
        <Route path='/student-societies' element={<StudentSocieties />} />
        <Route path='/fcit-information' element={<Fcit />} />
        <Route path='/media-society' element={<MediaSociety />}>
          <Route path='society-registration' element={<SocietyRegistration />} />
        </Route>
        <Route path='/sports-society' element={<SportsSociety />}>
          <Route path='society-registration' element={<SocietyRegistration />} />
        </Route>
        <Route path='/literary-society' element={<LiterarySociety />}>
          <Route path='society-registration' element={<SocietyRegistration />} />
        </Route>
        <Route path='/auth/sign-up' element={<AdminSignup />} />
        <Route path='/student-portal' element={<StudentPortal />} />
        <Route path='/auth/admin-login' element={<AdminLoginForm />} />
        <Route path='/auth/student-login' element={<LoginForm />} />
        <Route path="/add-student" element={<NewStudent />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
