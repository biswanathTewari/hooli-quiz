import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Landing, Login, Signup } from '../Pages'

const Navigation = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Landing />} />

      {/* auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default Navigation
