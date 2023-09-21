import { Box, Card, CardContent, Container, Typography, styled } from "@mui/material";
import React from "react";
import news from "../../constant/news";
import { Link } from "react-router-dom";
import Event from "../events/Event";
import Act from "../activities/Act";

const Contain=styled(Container)({
    maxWidth:'100% !important',
    display:'grid',
    padding:'0px !important',
    margin:'0px !important',
   
    
})
const Bgk=styled(Box)({
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  
   
    gap:45,
})
const News = () => {
  return (
    <Contain>
      <Box  textAlign={'center'} >
        <Typography display={'flex'} justifyContent={'center'} alignContent={'center'} flexDirection={'row'} fontSize={30} fontWeight={600} color={'#C21717 !important'}>ITG &nbsp; <Typography color={'black'} fontSize={30} fontWeight={600} >NEWS</Typography></Typography>
      </Box>
      <Box  style={{background:'#F9F9F6',padding:60}}  >
  
     <Bgk>
        {
            news.map(data=>(
                <Box display={'flex'} >
                    <img src={data.img} alt="" style={{marginRight:10}}/>
                    <Box>
                        <Typography fontSize={20}>{data.text1}</Typography>
                        <Typography>{data.text2}</Typography>
                        </Box>
                </Box>

            ))
        }
     </Bgk>
     <Box textAlign={'end'} marginTop={5}>
        <Link style={{textDecoration:'none',fontSize:16, fontWeight:500 ,color:'#7E1717'}} to={'/news'}>Show all of ITG NEWS</Link>
        
     </Box>
     <Event />
     <Act />
     </Box>

   
    </Contain>
  );
};

export default News;
