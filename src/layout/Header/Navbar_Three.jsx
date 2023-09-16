import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import React from 'react';
import {BiSolidRightArrow} from 'react-icons/bi'

const Header=styled(AppBar)({
    height:35,
    background:'white',
    display:'flex',
    // alignItems:'center',
    alignItems:'flex-start',
    padding:0,
    justifyContent:'center',
    '& > div':{
        // display:'flex',
        flexDirection:'row',
    }
    
})
const Container=styled(Box)({
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    height:35,
    width: '14rem',
    marginLeft: '-2rem',
    background:'#0D1282',
    paddingRight:12,
    '& > p':{
        color:'white',
    }
})
const Navbar_Three = () => {
  return (
    <Header position='static'>
        <Toolbar>
            <Container>
                <Typography>Announcements</Typography>
            </Container>
            {/* for running text  */}
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <BiSolidRightArrow style={{color:'#7E1717'}}/>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>

                <Typography fontSize={14} fontWeight={500} color={'#0D1282'}>&nbsp;77th Independence Day Celebrations at IIT Madras - Live Webcast &nbsp;</Typography>
                <Typography fontSize={14} fontWeight={500} color={'#0D1282'}>| &nbsp;</Typography>
                <Typography fontSize={14} fontWeight={500} color={'#0D1282'}>77th Independence Day Celebrations at IIT Madras - Live Webcast</Typography>
            </Box>
            

            </Box>



        </Toolbar>
    </Header>
  )
}

export default Navbar_Three