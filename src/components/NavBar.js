import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap"
import calendar from '../assets/calendar.png'
import styles from "../styles/NavBar.module.css"
import {NavLink} from 'react-router-dom'

const NavBar = () => {

  
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to='/'>
        <Navbar.Brand><img src={calendar} alt='calendar' height='45' /></Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <NavLink  className={styles.NavLink} to='/'><i className='fas fa-home'></i>Home</NavLink>
            <NavLink className={styles.NavLink} to='/signin'><i className='fas fa-sign-in-alt'></i>Sign In</NavLink>
            <NavLink className={styles.NavLink} to='/signup'><i className="fas fa-user-plus"></i>Sign Up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar