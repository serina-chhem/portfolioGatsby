import styled from 'styled-components'



export const FooterContainer = styled.div`

   
    flex-direction: column;
    height: auto;
    min-height: 0 auto;
    padding: 0 auto;
    text-align: center;

`

export const SocialMediaWrap = styled.div`

    display:flex; 
    justify-content:space-between;
    align-items:center;
    width:100%;
    max-width:700px;
    margin: 10px auto;
     
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        max-width: 270px;
        margin: 10px auto;
        color: #1B3CAA;
  }
`


export const WebsiteRights =styled.small`

    color:#1B3CAA;
    font-family : "Helvetica Neue", sans-serif;
    font-size:0.7rem;
`

export const SocialIcons = styled.div`

    width:200px;
    justify-content: space-evenly;
    display:flex;
    align-items:center;
    /* padding: 0 1rem; */

`

export const SocialIconLink = styled.a`
    color:#1B3CAA;
    font-size:17px;
   

`

