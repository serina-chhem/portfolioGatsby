import { Link } from "gatsby"
import styled from 'styled-components'

export const Nav = styled.nav`
        height: 70px;
        display:flex;
        justify-content:center;
        align-items:center;
        /* position:relative; */
        z-index: 99;
        top:0;
        
        @media screen and (max-width: 960px){
            background:${({click})=>(click ? "#fff": "transparent")};
            transition: 0.8 all ease;
        }
        margin: 0 auto;
        text-decoration: none;
        letter-spacing: 1.5px;
        font-family: var(--font);
        
       
        background:${({active}) => active ? "#fff" : "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)"};
       
    ` 

export const HeaderContainer = styled.div`
    background-color: var(--blanc);
    
    /* border-radius: 10px; */
    
    display:flex;
   
    justify-content:space-between;
    height:70px;
    width: 100%;
    top: 0px;
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
    @media screen and (max-width:960px){
      background-color:var(--blanc);
    }
    
   
  `

  export const NavLogo = styled(Link)`
        display: flex;
        align-items: center;
        text-align:center;
        text-transform: uppercase;
        justify-content: space-between;
        height: 70px ;
        font-size: 1.7rem;
        font-weight: 700;
        text-decoration: none;
        letter-spacing: 1.5px;
        margin-left:15px;
  
  `

  export const MobileIcon = styled.div`
    display:none;
   
    @media screen and (max-width: 960px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        z-index: 2;
        transform:translate(-100%, 60%);
        font-size:1.9rem;
        cursor: pointer;
    }
  `

  export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    
    
    @media screen and (max-width:960px){
        position: fixed;
       
        flex-direction: column;
        top: 0;
        bottom: 0;
        right: 0;
        padding: 50px 10px;
        width: min(50vw, 250px);
        height: 100vh;
       
        z-index: 1;
     
        top:${({ click }) => (click ? "0" : "2000vw")};
        transition: all 0.25s ease;
       
        background: rgba(255, 255, 255, 0.6 );
        box-shadow: 0 8px 10px 0 rgba(165, 164, 178, 0.37 );
        backdrop-filter: blur( 8px );
        justify-content:center;
    }
  `


  export const NavLink = styled(Link)`

    display: flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1.5rem;
    height:100%;
    font-size:1.1rem;
    
    @media screen and (max-width: 960px){
     
      align-items:center;
      padding:0 0;
      text-align: center;
      /* padding:2rem; */
      width:100%;
      display:table;
      
      &:hover{
        color:var(--saumon);
        
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