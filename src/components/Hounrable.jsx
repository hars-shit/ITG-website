import { Box, styled } from '@mui/material'
import React from 'react'
import head from '../constant/head'


const Container=styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:60,
})
const Hounrable = () => {
  return (
    <Container>
        {
            head.map((item,id)=>(
                <Box key={id}>
                      <img src={item.img} alt="" />  
                    </Box>

            ))
        }
    </Container>
  )
}

export default Hounrable