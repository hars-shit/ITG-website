import { AppBar, Toolbar, Typography, styled } from '@mui/material'
import React from 'react';
import {GoMail} from 'react-icons/go'
import {MdOutlineLocationOn} from 'react-icons/md'
import {IoIosCall} from 'react-icons/io'


const Header=styled(AppBar)({
    background:'#0D1282',
    height:'46px',
    display:'flex',
        justifyContent:'center',
        alignItems:'center',
}) 
const ToolBar=styled(Toolbar)({
    display:'flex',
    width:'96%',
    justifyContent: 'space-around',
        alignItems:'center',
        '& > a':{
            display:'flex',
        justifyContent:'center',
        textDecoration:'none',
        alignItems:'center',
            fontWeight:700,
            color:'white',
            
        }
})
const Navbar_One = () => {
  return (
    <Header position='static'>
        <ToolBar>
        <a href="" className="links"><GoMail />itgopeshwar@gmail.com</a>
        <a href="" className="links"><MdOutlineLocationOn />Institute of Technology Gopeshwar, Chamoli, UT-246424</a>
        <a href="" className="links"><IoIosCall />AICTE Feedback</a>
        <a href="" className="links">24*7 Women Helpline Number - 9389658483 </a>
        </ToolBar>
    </Header>
  )
}

export default Navbar_One