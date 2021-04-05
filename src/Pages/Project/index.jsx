import { Box } from '@material-ui/core'
import React from 'react'
import Header from '../../Components/Header'
import ProjectPage from '../../Components/ProjectPage'
import "./index.css"

const Project = () => {
    return (
        <>
          <Box className="project">
            <Header />
            <ProjectPage />
          </Box>  
        </>
    )
}

export default Project
