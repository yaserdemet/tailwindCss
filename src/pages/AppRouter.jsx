import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Contact from './Contact'
import Main from './Main'
import Other from './Other'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/other" element ={<PrivateRouter />} >

                  <Route path="" element = {<Other />} />
                </Route>
                <Route path="/contact" element ={<Contact />} />

            </Routes>

        
        </BrowserRouter>
    </div>
  )
}

export default AppRouter