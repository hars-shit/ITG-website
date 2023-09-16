import React from 'react'
import Navbar_One from './Navbar_One'
import Navbar_two from './Navbar_two'
import Navbar_Three from './Navbar_Three'
import { Box, styled } from '@mui/material'

const Container=styled(Box)({

})
const MainHeader = () => {
  return (
    <Container>
    <Navbar_One />
    <Navbar_two />
    <Navbar_Three />

    </Container>
  )
}

export default MainHeader