import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Footer = () => {
  const Lower = styled(Box)({
    background: "#0d1057",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    width:'100%',
    height:322,
    marginTop:'6rem',
    '& > div':{
        color:'white',
    }
  });
  return (
    <Lower>
      <Box  lineHeight={'25px'}>
        <Typography>Civil Engineering</Typography>
        <Typography>Mechanical Engineering</Typography>
        <Typography>Computer Science Engineering</Typography>
        <Typography>Electrical Engineering</Typography>
        <Typography>Electronics & Communications Engineering</Typography>
      </Box>
      <Box  lineHeight={'25px'}>
        <Typography>About College</Typography>
        <Typography>About UTU</Typography>
        <Typography>Vice Chancellor’s Message</Typography>
        <Typography>Director's Message</Typography>
        <Typography>
          AICTE Feedback National Academics Depository(NAD)
        </Typography>
      </Box>
      <Box  lineHeight={'25px'}>
        <Typography>Apply Online</Typography>
        <Typography>Infrastucture</Typography>
        <Typography>Affiliation</Typography>
        <Typography>Course</Typography>
        <Typography>Fee Structure</Typography>
        <Typography>MANDATORY DISCLOSURES</Typography>
      </Box>

      <Box width={'16%'} lineHeight={'25px'}>
        Institute of Technology, Gopeshwar, Chamoli Uttarakhand-246424
        9720651770 (HoD,ME 8755329574), (HoD,ECE 9927216113), (HoD,CSE
        8979571419), (HoD,CE 8193069402),(HoD,EE 7417493728)
        <a href="mailto:itgopeshwar@gmail.com" style={{color:'white',marginLeft:'5px'}} >itgopeshwar@gmail.com</a>
      </Box>
    </Lower>
  );
};

export default Footer;
