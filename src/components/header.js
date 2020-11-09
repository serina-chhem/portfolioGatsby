import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import {FaBars, FaTimes} from 'react-icons/fa'
import {NavLogo, Nav, HeaderContainer, MobileIcon, NavItem, NavLink, NavMenu} from '../components/headerElements'

const Header = () => {

  const [click, setClick]= useState(false)

  const handleClick= () => setClick(!click)

  return(
  
  
    
    <Nav click={click}>
      <HeaderContainer>
        <NavLogo to = "/">
          SÉRINA CHHEM
        </NavLogo>

        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars/>}
        </MobileIcon>

        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLink to = "/aboutme">À propos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to = "/work">projets</NavLink>
          </NavItem>
          <NavItem>
           <NavLink to = "/experiences">Expériences</NavLink>
          </NavItem>
          <NavItem>
           <NavLink to = "/contact">Contact</NavLink>
          </NavItem>
        </NavMenu>
        </HeaderContainer>
    </Nav>

  
)
}



export default Header
