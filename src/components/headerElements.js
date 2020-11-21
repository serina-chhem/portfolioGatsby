import { Link } from "gatsby"
import styled from 'styled-components'

export const Nav = styled.nav`
        height: 70px;
        display:flex;
        justify-content:center;
        align-items:center;
        position:sticky;
        top:0;
        z-index: 999;
        @media screen and (max-width: 960px){
            background:${({click})=>(click ? "#fff": "transparent")};
            transition: 0.8 all ease;
        }
        margin: 0 auto;
        text-decoration: none;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #222876;
        background:${({active}) => active ? "#fff" : "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)"};

       
    ` 

export const HeaderContainer = styled.div`
    display:flex;
    background-color:#E6E7EF;
    justify-content:space-between;
    height:70px;
    width: 100%;
    /* position: sticky; */
    top: 0px;
    /* z-index: 10; */
    font-family: "Helvetica Neue";
    margin: 0 auto;
    max-width: 2000px;
    padding: 0 auto;
    @media (max-width: 1080px) {
      padding: 0;
    }
    @media (max-width: 768px) {
      padding: 0;
    }
    @media (max-width: 480px) {
      padding: 0;
    }
    
   
  `

  export const NavLogo = styled(Link)`
        display: flex;
        align-items: center;
        text-align:center;
        justify-content: space-between;
        height: 70px ;
        font-size: 2rem;
        font-weight: 700;
        text-decoration: none;
        letter-spacing: 1.5px;
        color: #222876;
        margin-left:15px;
  
  `

  export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 960px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%, 60%);
        font-size:1.9rem;
        cursor: pointer;
    }
  `

  export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center; 
    
    @media screen and (max-width:960px){
        display: flex;
        flex-direction: column;
        width:100%;
        height:90vh;
        position:absolute;
        top:${({ click }) => (click ? "100%" : "-1000px")};
        opacity:1;
        transition: all 0.2s ease;
        background:#fff;
         
    }
  `


  export const NavLink = styled(Link)`
    color: #222876;
    display: flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height:100%;

    @media screen and (max-width: 960px){
      text-align: center;
      padding:2rem;
      width:100%;
      display:table;

      &:hover{
        color:#222876;
        transition: all 0.3s ease;
      }
    }
  `

  export const NavItem = styled.li`
    height:70px;
    font-size:0.9rem;
    @media screen and (max-width: 960px){
      width:100%;
    }
  
  `
