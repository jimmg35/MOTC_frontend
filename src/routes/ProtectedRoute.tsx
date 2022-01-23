import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  // const isAuthenticated = localStorage.getItem('isAuthenticated')
  // console.log('this', isAuthenticated)
  // alert('AAAAAAAAAAAAAaa')
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
