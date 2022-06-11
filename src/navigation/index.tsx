import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Landing, Login, Signup, Quiz } from '../Pages'
import ProtectedRoute from './ProtectedRoute'

const Navigation = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Landing />} />

      {/* auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* protected routes */}
      <Route
        path="/quiz"
        element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default Navigation
