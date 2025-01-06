import React from 'react'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout