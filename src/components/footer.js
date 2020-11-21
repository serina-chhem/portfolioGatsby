import React from "react"
import {FooterContainer, SocialMediaWrap, SocialIcons, WebsiteRights, SocialIconLink} from '../components/footerElements.js'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (

    <FooterContainer>
        {/* <SocialLinks> */}
            <SocialMediaWrap>
                
                <WebsiteRights>
                © {new Date().getFullYear()}, Design and Built by Sérina CHHEM
                </WebsiteRights>

                <SocialIcons>
                    <SocialIconLink href = "https://github.com/serina-chhem" target="_blank" arial-label = "Github">
                        <FaGithub/>
                    </SocialIconLink>
                </SocialIcons>

                <SocialIcons>
                    <SocialIconLink href = "https://www.linkedin.com/in/serinachhem" target="_blank" arial-label = "LinkedIn">
                        <FaLinkedin/>
                    </SocialIconLink>
                </SocialIcons>

            </SocialMediaWrap>
        {/* </SocialLinks> */}
      
    </FooterContainer>

    )
}
export default Footer
