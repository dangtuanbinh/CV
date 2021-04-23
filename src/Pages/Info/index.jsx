import { Box } from '@material-ui/core'
import React from 'react'
import "./index.css"
import Header from "../../Components/Header/index"
import InfoPage from '../../Components/InfoPage'

const Info = () => {
    return (
        <>
            <Box className="info">
                <Header />
                <InfoPage />
            </Box>
        </>
    )
}

export default Info