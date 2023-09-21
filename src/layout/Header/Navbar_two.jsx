import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'


const Header=styled(AppBar)({
    boxShadow:'none',
    background:'white',
    height:120,
    '& > div':{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        '& > div':{
            '& > div':{
                
                '& > p':{
                    color:'black',
                }
            }
        }
    }
})
const Image=styled('img')({
    width:'10.5rem',
    height:'6rem'
})
const Icon=styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'

})
const Items=styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'35%',
    '& > button.activeAbout':{
        color:'white',
        border:"1px solid #7E1717",
        borderRadius:5,
        background:'#7E1717',
        fontSize:17,
        fontWeight:600,
        height:'2rem'
    },
    '& > button.NotActive':{
        border:'none',
        background:'white',
        color:'black',
        fontSize:17,
        fontWeight:600,
    }
})
const Signin=styled(Box)({
    '& > button':{
        background:'white',
        width:'5.5rem',
        height:'2rem',
        color:'#7E1717',
        fontWeight:600,
        borderRadius:5,
        fontSize:15,
        transition: 'background 0.4s ease, color 0.5s ease',
    },
    '& > button:hover':{
        background:'#7E1717',
        color:'white',
    }
})
const Navbar_two = () => {
    const[about,setAbout]=useState(false);
    const[admin,setAdmin]=useState(false);
    const[department,setDepartment]=useState(false);
    const[academic,setAcademic]=useState(false);
    const handleAbout=()=>{
        setAbout(!about);
        setAdmin(false);
        setAcademic(false);
        setDepartment(false);
    }
    const handleAdmin=()=>{
        setAdmin(!admin);
        setAbout(false);
        setAcademic(false);
        setDepartment(false);
    }
    const handleAcademic=()=>{
        setAcademic(!academic);
        setAdmin(false);
        setAbout(false);
        setDepartment(false);
    }
    const handleDepart=()=>{
        setDepartment(!department);
        setAdmin(false);
        setAcademic(false);
        setAbout(false);
    }
  return (
    <Header position='static'>
        <Toolbar sx={{height:'100%'}}>
            {/* for clg logo */}
            <Icon>
                <Box width={133}>
                    {/* img  */}
                  <Image src="https://storage.googleapis.com/ezap-prod/colleges/3615/institute-of-technology-gopeshwar-chamoli-logo.png" alt="" />


                </Box>
                <Box display={'flex'}  flexDirection={'column'} >
                    

                    <Typography fontSize={26} fontWeight={700} lineHeight={1}>प्रौद्योगिकी संस्थान, गोपेश्वर</Typography>
                    <Typography fontSize={24} fontWeight={700}>Institute of Technology, Gopeshwar</Typography>
                    <Typography fontSize={12} fontWeight={700}>VEER MADHO SINGH BHANDARI UTTARAKHAND TECHNICAL UNIVERSITY CAMPUS INSTITUTE</Typography>
                    <Typography fontSize={14} fontWeight={400}>Approved By AICTE, NEW DELHI</Typography>
                </Box>

            </Icon>

            <Items>
                
                    <button className={(!admin && !about && !department && !academic) ? 'activeAbout' : 'NotActive'} >HOME</button>
                    <button onClick={()=>handleAbout()} className={about ? 'activeAbout':"NotActive"}>ABOUT</button>
                    <button onClick={()=>handleAdmin()} className={admin ? 'activeAbout':"NotActive"}>ADMINISTRATION</button>
                    <button onClick={()=>handleDepart()} className={department ? 'activeAbout':"NotActive"}>DEPARTMENTS</button>
                    <button onClick={()=>handleAcademic()} className={academic ? 'activeAbout':"NotActive"}>ACADEMIC</button>
               
            </Items>

            {/* for login  */}

            <Signin>
                <button>Login</button>
            </Signin>

        </Toolbar>
    </Header>
  )
}

export default Navbar_two