import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Landing, Login } from '../Pages'

const Navigation = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Landing />} />

      {/* auth routes */}
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Navigation
