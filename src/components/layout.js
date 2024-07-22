import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
       <Navbar expand="lg" style={{backgroundColor:'#2c2c38'}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto pe-5 me-5">
                    <Nav.Link href="#intro" className='text-white px-4'>Home</Nav.Link>
                    <Nav.Link href="#portfolio" className='text-white px-4'>Portfolio</Nav.Link>
                    <Nav.Link href="#contact" className='text-white px-4'>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
        <Outlet />
    </div>
  )
}
