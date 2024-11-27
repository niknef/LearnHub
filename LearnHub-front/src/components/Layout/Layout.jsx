import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import { SessionProvider } from "../../contexts/session.context"
const Layout = () => {

  return (
  <SessionProvider>
    <NavBar /> 
    <Outlet />
    {/* FOOTER */}
  </SessionProvider>
  )
}

export default Layout