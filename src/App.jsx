import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './layouts/NavBar'
import Home from './pages/Home'
import Department from './pages/Department'
import ComputerScience from './pages/ComputerScience'
import SoftwareEngineering from './pages/SoftwareEngineering'
import InformationTechnology from './pages/InformationTechnology'
import DataScience from './pages/DataScience'
import StudentPortal from './pages/StudentPortal'
import StudentSocieties from './pages/StudentSocieties'
import Faculty from './pages/Faculty'
import ErrorPage from './pages/ErrorPage'
import Footer from './layouts/Footer'


function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Department' element={<Department />}>
            <Route path='ComputerScience' element={<ComputerScience />} />
            <Route path='SoftwareEngineering' element={<SoftwareEngineering />} />
            <Route path='InformationTechnology' element={<InformationTechnology />} />
            <Route path='DataScience' element={<DataScience />} />
          </Route>
          <Route path='/StudentPortal' element={<StudentPortal />} />
          <Route path='/StudentSocieties' element={<StudentSocieties />} />
          <Route path='/Faculty' element={<Faculty />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
