import React from 'react'
import Navbarr from './Navbarr/Navbarr'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbarr/>
    <Outlet/>
  
    
    </>
  )
}

export default Layout