import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import StudyPage from './StudyPage'
function App() {

  return (
    <>
      <div>
        <Header/>
        <Routes>
           <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/study" element={<StudyPage/>} />
         
        </Routes>
        <Footer/>
    </div>
    </>
  )
}

export default App
