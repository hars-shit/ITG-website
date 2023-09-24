import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import news from "../../constant/news";
import { Link } from "react-router-dom";

const NewAct = () => {
    const Image=styled(Box)({
        background:"url(./assets/bg.png)",
        // backgroundRepeat:'no-repeat',
        backgroundSize:"cover",
        width:'100%',
        height:'100%',
        objectFit:'cover',
        '& > div':{
          display:'flex' ,
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column',
          height:'100%',
          '& > div':{
            marginTop:30,
            display:'flex' ,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            gap:10,
          }

        }
       
    })
  return (
   
    <Container style={{padding:0,overflow:'hidden', height:'445px'}} maxWidth={'100%'} >


    <Box  display={'flex'} maxWidth={'100%'}>
      {/* for news  */}
      <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}  width={'70%'} gap={5}>
      <Box fontSize={'32px'} fontWeight={700}  color="#7E1717">ITG-NEWS</Box>
      <Box backgroundColor="#f1f1f1" width={'100%'} height={'385px'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} flexDirection={'column'}>

      {/* for first row  */}

      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} >
      
        {
            news.map(data=>(
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}> 
          <Box marginRight={'20px'}>
              <img src={data.img} alt="" />
        </Box>
        <Box>
          <Typography fontSize={'24px'} fontWeight={500}>{data.text1}</Typography>
          <Typography width={'40vh'} >{data.text2}</Typography>

        </Box>
              </Box>
            ))
        }
      </Box>
       {/* for second row  */}
       <Box display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'row'}
            width={'100%'}>
      
      {
          news.map(data=>(
            <>
        <Box  marginRight={'20px'}>
            <img src={data.img} alt="" />
      </Box>
      <Box >
        <Typography fontSize={'24px'} fontWeight={500}>{data.text1}</Typography>
        <Typography width={'40vh'}>{data.text2}</Typography>

      </Box>
            </>
          ))
      }
    </Box >
    <Box  alignSelf="flex-end" marginRight={'47px'}>
      <Link to={'/'} >Show all of ITG NEWS</Link>
    </Box>
    </Box>
      </Box>

      {/* for events  */}
      <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} width={'30%'}  gap={5}>
      <Box fontSize={'32px'} fontWeight={700}  color="#7E1717">ITG-EVENTS</Box>
      <Image>
        <Box backgroundColor= "rgba(0, 0, 0, 0.5)" >
        <Box ><img src="./assets/Vector.png" alt="" /><Typography color={'white'} fontWeight={600} fontSize={'20px'}>Coding/Artificial Intelligence</Typography></Box>
        <Box ><img src="./assets/Vector.png" alt="" /><Typography color={'white'} fontWeight={600}  fontSize={'20px'}>Coding/Artificial Intelligence</Typography></Box>
        <Box ><img src="./assets/Vector.png" alt="" /><Typography color={'white'} fontWeight={600}  fontSize={'20px'}>Coding/Artificial Intelligence</Typography></Box>
       
       <Box   width="100%"
              justifyContent={'flex-end !important'}
              marginRight={'60px !important'}>
        <Link  to={'/'} style={{color:'white'}}>Show all of ITG EVENTS</Link>
        </Box> 
        </Box>
    </Image>
      </Box>
      </Box>

    </Container>
  );
};

export default NewAct;
