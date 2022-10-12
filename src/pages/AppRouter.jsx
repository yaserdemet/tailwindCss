import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/other" element ={<Other />} />

            </Routes>

        
        </BrowserRouter>
    </div>
  )
}

export default AppRouter