import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getIsLoggedIn } from '../store'

const ProtectedRoute = ({ children }: any) => {
  const location = useLocation()
  const isLoggedIn = useSelector(getIsLoggedIn)

  if (!isLoggedIn)
    return <Navigate to="/login" replace state={{ from: location }} />

  return children
}

export default ProtectedRoute
