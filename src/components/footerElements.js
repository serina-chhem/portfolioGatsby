import styled from 'styled-components'



export const FooterContainer = styled.div`

    /* position: fixed; */
   
    /* flex-direction: column; */

    height: auto;
   
    margin: 0 auto;


`

export const SocialMediaWrap = styled.div`

    display:flex; 
    justify-content:space-between;
    align-items:center;
    width:100%;
    max-width:700px;
    margin: 0 auto;
     
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        max-width: 270px;
        margin: 10px auto;
        color: var(--bleu-vert);
  }
`


export const WebsiteRights =styled.small`

    color: var(--bleu-vert-fonce);
    font-family : var(--font);
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
    color: var(--bleu-vert-fonce);
    font-size:17px;
   

`

