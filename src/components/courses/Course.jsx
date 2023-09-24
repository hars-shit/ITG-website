import { Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Civil = styled(Box)({
  background: "url('./assets/civil.png')",
  backgroundRepeat: 'no-repeat',
    height: '286px',
    width: '440px',
  
   
});
const CSE = styled(Box)({
    background: "url('./assets/cse.png')",
    backgroundRepeat: 'no-repeat',
    height: '286px',
    width: '440px',
        
})
  
  const EE = styled(Box)({
    background: "url('./assets/elec.png')",
    backgroundRepeat: 'no-repeat',
    height: '286px',
    width: '440px'
  });
  const Mech = styled(Box)({
    background: "url('./assets/mech.png')",
    backgroundRepeat: 'no-repeat',
    height: '286px',
    width: '440px'
  });
  const ECE = styled(Box)({
    background: "url('./assets/electro.png')",
    backgroundRepeat: 'no-repeat',
    height: '286px',
    width: '440px'
  });
const ADM = styled(Box)({
  background: "url('./assets/adm.png')",
  backgroundRepeat: 'no-repeat',
  height: '286px',
  width: '440px'
});
  const Card=styled(Box)({
    display:'flex', 
    justifyContent:'space-evenly',
     alignItems:'center',
     flexDirection:'column',
      backgroundColor: '#1D1B1B',
      width:'440px' ,
       height:"286px",
       '& > p':{
        color:'white',
        fontWeight:700,
         padding:'10px 30px',

         // fontSize:'13px     ',
        textAlign:'justify',
       }
  })
const Course = () => {
  const [civil, setCivil] = useState(false);
  const [cse, setCse] = useState(false);
  const [mech, setMech] = useState(false);
  const [ece, setEce] = useState(false);
  const [ee, setEe] = useState(false);
  const [adm, setadm] = useState(false);

  const handleCivil = () => {
    setCivil(!civil);
    // setCse(false)
    // setEce(false)
    // setEe(false)
    // setMech(false)
  };
  const handleCse = () => {
    setCse(!cse);
    // setCivil(false)
    // setEce(false)
    // setEe(false)
    // setMech(false)
  };
  const handleMech = () => {
    setMech(!mech);
    // setCse(false)
    // setEce(false)
    // setEe(false)
    // setCivil(false)
  };
  const handleEce = () => {
    setEce(!ece);
    // setCse(false)
    // setCivil(false)
    // setEe(false)
    // setMech(false)
  };
  const handleEe = () => {
    setEe(!ee);
    // setCse(false)
    // setEce(false)
    // setCivil(false)
    // setMech(false)
  };
  const handleade = () => {
    setadm(!adm);
    // setCse(false)
    // setEce(false)
    // setCivil(false)
    // setMech(false)
  };

  return (
    <Box width={'100%'}>
      <Box textAlign={'center'}>
        <Typography fontSize={'40px'} fontWeight={700} marginBottom={7} color="#7E1717">COURSES OFFERED</Typography>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} width={'100%'} gap={10} overflow={'hidden'}>
        {/* for single row  */}
      <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} flexDirection={'row'} width={'100%'} >
        <Box  height='286px' width= '440px' > 
          {/* Image or content in this div */}
          <ReactCardFlip isFlipped={civil} flipDirection="vertical"  >
            <Civil onClick={handleCivil} onMouseEnter={handleCivil}>
              <Box sx={{backgroundColor:'rgba(0, 0, 0, 0.5)'}} width={'100%'} height={'100%'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>

              {/* Front of the card */}
              <Typography fontSize={'32px'} color={'white'} fontWeight={600}> CIVIL ENGINEERING</Typography>
              </Box>
            </Civil>
            <Card onClick={handleCivil}>
              {/* Back of the card */}
              <Typography fontSize={'26px'} >GRADUATE PROGRAM</Typography>
              <Typography fontSize={'14px'}>
                Civil Engineering is a Professional Engineering discipline and
                it is the Mother branch of Engineering that deals with the
                design, construction and maintenance of the physical and
                naturally built environment, including works such as bridges,
                roads, canals, dams and buildings. It is traditionally broken
                into several sub-disciplines including Environmental
                Engineering, Geotechnical Engineering, Structural Engineering.
                <Typography color="#79bb22">
                  Read More...
                  </Typography>
              </Typography>
            </Card>
          </ReactCardFlip>
        </Box>
        <Box height='286px' width= '440px'>
          {/* Image or content in this div */}
          <ReactCardFlip isFlipped={cse} flipDirection="vertical">
            <CSE onClick={handleCse} onMouseEnter={handleCse}>
              {/* Front of the card */}
             <Box sx={{backgroundColor:'rgba(0, 0, 0, 0.5)'}} width={'100%'} height={'100%'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Typography fontSize={'32px'} color={'white'} fontWeight={600} width={'100%'} textAlign={'center'}>COMPUTER SCIENCE & ENGINEERING</Typography>
              </Box>
            </CSE>
            <Card onClick={handleCse}>
              {/* Back of the card */}
              <Typography fontSize={'26px'} >GRADUATE PROGRAM</Typography>
              <Typography fontSize={'14px'}>
                Civil Engineering is a Professional Engineering discipline and
                it is the Mother branch of Engineering that deals with the
                design, construction and maintenance of the physical and
                naturally built environment, including works such as bridges,
                roads, canals, dams and buildings. It is traditionally broken
                into several sub-disciplines including Environmental
                Engineering, Geotechnical Engineering, Structural Engineering.
                <Typography color="#79bb22">
                  Read More...
                  </Typography>
              </Typography>
            </Card>
          </ReactCardFlip>
        </Box>
        <Box height='286px' width= '440px'>
          {/* Image or content in this div */}
          <ReactCardFlip isFlipped={ee} flipDirection="vertical">
            <EE onClick={handleEe} onMouseEnter={handleEe}>
              {/* Front of the card */}
              <Box sx={{backgroundColor:'rgba(0, 0, 0, 0.5)'}} width={'100%'} height={'100%'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Typography fontSize={'32px'} color={'white'} fontWeight={600} textAlign={'center'}>ELECTRICAL ENGINEERING</Typography>
              </Box>
            </EE>
            <Card onClick={handleEe}>
              {/* Back of the card */}
              <Typography fontSize={'26px'} >GRADUATE PROGRAM</Typography>
              <Typography fontSize={'14px'}>
                Civil Engineering is a Professional Engineering discipline and
                it is the Mother branch of Engineering that deals with the
                design, construction and maintenance of the physical and
                naturally built environment, including works such as bridges,
                roads, canals, dams and buildings. It is traditionally broken
                into several sub-disciplines including Environmental
                Engineering, Geotechnical Engineering, Structural Engineering,
                <Typography color="#79bb22">
                  Read More...
                  </Typography>
              </Typography>
            </Card>
          </ReactCardFlip>
        </Box>
      </Box>
       {/* for single row  */}
       <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} width={'100%'} gap={10}
            // marginLeft={"12rem"}
       >
        <Box height='286px' width= '440px' >
          {/* Image or content in this div */}
          <ReactCardFlip isFlipped={mech} flipDirection="vertical">
            <Mech onClick={handleMech} onMouseEnter={handleMech}>
            <Box sx={{backgroundColor:'rgba(0, 0, 0, 0.5)'}} width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
              {/* Front of the card */}
              <Typography fontSize={'32px'} color={'white'} fontWeight={600} textAlign={'center'}>MECHANICAL ENGINEERING</Typography>
              </Box>
            </Mech>
            <Card onClick={handleMech} >
              {/* Back of the card */}
              <Typography fontSize={'26px'} >GRADUATE PROGRAM</Typography>
              <Typography fontSize={'14px'}>
                Civil Engineering is a Professional Engineering discipline and
                it is the Mother branch of Engineering that deals with the
                design, construction and maintenance of the physical and
                naturally built environment, including works such as bridges,
                roads, canals, dams and buildings. It is traditionally broken
                into several sub-disciplines including Environmental
                Engineering, Geotechnical Engineering, Structural Engineering,
                <Typography color="#79bb22">
                  Read More...
                  </Typography>
              </Typography>
            </Card>
          </ReactCardFlip>
        </Box>
        <Box height='286px' width= '440px' >
          {/* Image or content in this div */}
          <ReactCardFlip isFlipped={ece} flipDirection="vertical">
            <ECE onClick={handleEce} onMouseEnter={handleEce}>
              {/* Front of the card */}
              <Box sx={{backgroundColor:'rgba(0, 0, 0, 0.5)'}} width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Typography fontSize={'32px'} color={'white'} fontWeight={600} textAlign={'center'}>ELECTRONICS & COMM. ENGINEERING</Typography>
              </Box>
            </ECE>
            <Card onClick={handleEce}>
              {/* Back of the card */}
              <Typography fontSize={'26px'} >GRADUATE PROGRAM</Typography>
              <Typography fontSize={'14px'}>
                Civil Engineering is a Professional Engineering discipline and
                it is the Mother branch of Engineering that deals with the
                design, construction and maintenance of the physical and
                naturally built environment, including works such as bridges,
                roads, canals, dams and buildings. It is traditionally broken
                into several sub-disciplines including Environmental
                Engineering, Geotechnical Engineering, Structural Engineering,
                <Typography color="#79bb22">
                  Read More...
                  </Typography>
              </Typography>
            </Card>
          </ReactCardFlip>
        </Box>
        {/*<Box height='286px' width= '440px' >*/}
        {/*  /!* Image or content in this div *!/*/}
        {/* <img src="./assets/adm.png" alt="" />*/}
        {/*</Box>*/}
         <Box height='286px' width= '440px' >
           {/* Image or content in this div */}
           <ReactCardFlip isFlipped={ece} flipDirection="vertical">
             <ADM onClick={handleade} onMouseEnter={handleade}>
               {/* Front of the card */}
               <Box sx={{backgroundColor:'rgba(0, 0, 0, 0.5)'}} width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                 <Typography fontSize={'32px'} color={'white'} fontWeight={600} textAlign={'center'}></Typography>
               </Box>
             </ADM>
             <Card onClick={handleade}>
               {/* Back of the card */}
               <Typography fontSize={'26px'} >GRADUATE PROGRAM</Typography>
               <Typography fontSize={'14px'}>
                 Civil Engineering is a Professional Engineering discipline and
                 it is the Mother branch of Engineering that deals with the
                 design, construction and maintenance of the physical and
                 naturally built environment, including works such as bridges,
                 roads, canals, dams and buildings. It is traditionally broken
                 into several sub-disciplines including Environmental
                 Engineering, Geotechnical Engineering, Structural Engineering,
                 <Typography color="#79bb22">
                   Read More...
                 </Typography>
               </Typography>
             </Card>
           </ReactCardFlip>
         </Box>
        <Box>
        
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default Course;
