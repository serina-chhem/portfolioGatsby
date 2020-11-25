import Header from '../components/header'
import Footer from '../components/footer'
import React from "react"
import NotFoundPage from '../pages/404'
import styled from 'styled-components'


const Mobility = () => {

    return(
        <div className="main">
        <Header/>
       
            <NotFoundPage/>
       
        <Footer/>
        </div>
    )
}

export default Mobility