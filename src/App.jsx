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
