
import React, {useState, useEffect} from "react"
import Headroom from "react-headroom"
import {FaBars, FaTimes} from 'react-icons/fa'
import {NavLogo, Nav, HeaderContainer, MobileIcon, NavItem, NavLink, NavMenu} from '../components/headerElements'

const Header = () => {

  const [click, setClick]= useState(false)
  const [scroll, setScroll]= useState(false)



  const handleClick= () => setClick(!click)

  const changeNav = () => {
    if(window.scrollY >= 60){
      setScroll(true)
    }
    else{
      setScroll(false)
    }
  }

  useEffect(()=>{
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return(
  
  <Headroom disableInlineStyles="true">
    
    <Nav click={click} active={scroll}>
      <HeaderContainer>
        <NavLogo to = "/" >
          <a >
          Sérina Chhem
          </a>
        </NavLogo>

        <MobileIcon onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
        </MobileIcon>

        <NavMenu onClick={handleClick} click={click}>


          <NavItem>
            <NavLink to = "/aboutme">À propos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to = "/work">Portfolio</NavLink>
          </NavItem>
          {/* <NavItem>
           <NavLink to = "/experiences">Expériences</NavLink>
          </NavItem> */}
          <NavItem>
           <NavLink to = "/contact">Contact</NavLink>
          </NavItem>
        </NavMenu>
        </HeaderContainer>
    </Nav>
  </Headroom>
  
)
}



export default Header
