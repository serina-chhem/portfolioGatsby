import React from "react"


const Footer = () => {
    return (
        <footer style={{
                marginTop: `2rem`
                }}>
                © {new Date().getFullYear()}, Design and Built by
                {` `}
                <a href="https://github.com/serina-chhem/portfolioGatsby">Sérina CHHEM</a>
        </footer>
    )
}
export default Footer
