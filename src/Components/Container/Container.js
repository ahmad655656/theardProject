import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from '../../Section/index'
import { Home, News, Films } from '../../Pages/index'
import './Container.css'
import SignIn from '../../Pages/SignIn/SignIn'
import Series from '../../Pages/Series/Series'
import Contact_As from '../../Pages/Contact As/Contact_As'
import Footer from '../../Section/Footer/Footer'

function Container() {
  return (
   <Router>
     <div className='container'>
      <Header />
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/news' element={<News />}></Route>
      <Route path='/films' element={<Films />}></Route>
      <Route path='/series' element={<Series />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/contactAs' element={<Contact_As />}></Route>
      </Routes>
      <Footer />
    </div>
   </Router>
  )
}

export default Container
