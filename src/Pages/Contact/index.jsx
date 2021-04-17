import { Box } from '@material-ui/core'
import React from 'react'
import ContactPage from '../../Components/ContactPage'
import Header from '../../Components/Header'
import "./index.css"

const Contact = () => {
    return (
        <>
          <Box className="contact">
            <Header />
            <ContactPage />
            </Box>  
        </>
    )
}

export default Contact
