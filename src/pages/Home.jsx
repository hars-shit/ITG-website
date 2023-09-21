import React from 'react'
import Banner from '../components/Banner'
import Hounrable from '../components/Hounrable'
import News from '../components/news/News'
import { Box } from '@mui/material'
import Event from '../components/events/Event'

import NewAct from '../components/news/NewAct'
import Act from '../components/activities/Act'
import About from '../components/about_College/About'
import Course from '../components/courses/Course'


const Home = () => {
  return (
   <Box>
    <Banner />
   <Hounrable />
   <NewAct />
   <Act />
   <About />
   <Course />
   {/* <News /> */}
   {/* {/* <Event /> */}
   
   

   </Box>
  )
}

export default Home