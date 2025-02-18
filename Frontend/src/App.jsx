import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import StudyPage from './StudyPage'
import Login from './Login'
import Signup from './Signup'
import AddFlashcard from './AddFlashcard'
function App() {

  return (
    <>
      <div>
        <Header/>
        <Routes>
           <Route path="/" element={<HomePage/>}/>

           <Route path="/add" element={<AddFlashcard/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/signup" element={<Signup/>} />
          
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/study" element={<StudyPage/>} />
         
        </Routes>
        <Footer/>
    </div>
    </>
  )
}

export default App
