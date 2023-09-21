import { Box, Typography, styled } from "@mui/material";
import React from "react";

const NewAct = () => {
    const BB=styled(Box)({
        position:'relative',
        background:"url(./assets/bg.png)",
        width:522,
        height:385,
        backgroundRepeat:'no-repeat',
        '& > box':{
            backgroundColor:'gray',
            

        }
    })
  return (
    <Box height={'445px'}  display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} position={'relative'}>
      <Box  display={'flex'} justifyContent={'center'} alignItems={'center' } flexDirection={'column'} position={'absolute'} right="44rem" width="75rem">
        <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
          <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
          <Typography  fontSize={'32px'} fontWeight={700}  color="#7E1717" position={'absolute'} bottom={'26rem'}>
          ITG - NEWS
        </Typography>
        <Box backgroundColor="#f1f1f1" width="98rem" height={'24rem'} display={'flex'} justifyContent={'center'}  flexDirection={'column'} gap={6} paddingLeft={10}>

       
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
            <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} gap={3} marginRight={12}>
                <img src="./assets/globe.png" alt="" />
                <Box>

                <Typography fontSize={20} fontWeight={600} marginBottom={1}>Coding/Artificial Intelligence</Typography>
                <Typography width={'22rem'} >Notice regarding 10 days Short term course on “Coding/Artificial Intelligence”</Typography>
                </Box>
            </Box>
            <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} gap={3}>
                <img src="./assets/globe.png" alt="" />
                <Box>

                <Typography  fontSize={20} fontWeight={600} marginBottom={1}>Coding/Artificial Intelligence</Typography>
                <Typography width={'22rem'} >Notice regarding 10 days Short term course on “Coding/Artificial Intelligence”</Typography>
                </Box>
            </Box>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>

            
            <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} gap={3} marginRight={12}>
                <img src="./assets/globe.png" alt="" />
                <Box>

                <Typography  fontSize={20} fontWeight={600} marginBottom={1}>Coding/Artificial Intelligence</Typography>
                <Typography width={'22rem'} >Notice regarding 10 days Short term course on “Coding/Artificial Intelligence”</Typography>
                </Box>
            </Box>
            <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} gap={3}>
                <img src="./assets/globe.png" alt="" />
                <Box>

                <Typography  fontSize={20} fontWeight={600} marginBottom={1}>Coding/Artificial Intelligence</Typography>
                <Typography width={'22rem'} >Notice regarding 10 days Short term course on “Coding/Artificial Intelligence”</Typography>
                </Box>
            </Box>

            </Box>
            <Typography position={'absolute'} top = "21.9rem" width= "12rem" left="73rem">Show all of ITG NEWS</Typography>
            </Box>
          </Box>
        </Box>
       
      </Box>
      <Box position={'absolute'} bottom={'28.9px'} left={'86.46rem'}>
            <Typography fontSize={'32px'} fontWeight={700}  color="#7E1717" position={'absolute'} bottom={'26.2rem'} left={'10rem'}>ITG - EVENTS</Typography>
    <BB>
        <div style={{width:'100%' ,height:'100%',backgroundColor: "rgba(0, 0, 0, 0.5)"}} >
            <Box  display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'}  height={'100%'} gap='35px'paddingTop={7}>
                <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}><img src="./assets/Vector.png" alt="" /><Typography color={'white'} fontWeight={600} marginLeft={2}>Coding/Artificial Intelligence</Typography></Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}><img src="./assets/Vector.png" alt="" /><Typography color={'white'} fontWeight={600} marginLeft={2}>Coding/Artificial Intelligence</Typography></Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}><img src="./assets/Vector.png" alt="" /><Typography color={'white'} fontWeight={600} marginLeft={2}>Coding/Artificial Intelligence</Typography></Box>
                <Typography color={'white'} alignSelf={'flex-end'} marginTop= "2.6rem" marginRight= "2rem">Show all of ITG EVENTS</Typography>
            </Box>
                </div>
        
    </BB>

   
      </Box>
    </Box>
  );
};

export default NewAct;
