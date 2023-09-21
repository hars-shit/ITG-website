import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box marginTop={5} display={'flex'} justifyContent={'center'} alignItems={'center'} columnGap={10} padding={10}>
      <Box>
        <img src="./assets/about.png" alt="" />
      </Box>

      <Box  width={'60rem'} textAlign={'justify'}>
        <Typography fontSize={'40px'} marginBottom={3} color="#7E1717">
          Institute of Technology, Gopeshwar Founded in 2013
        </Typography>
        <Typography>
          Institute of Technology Gopeshwar is one of the four constituent
          colleges of Uttarakhand Technical University that was established in
          October 2013 with the approval of Uttarakhand Government. IT Gopeshwar
          is approved by AICTE, Ministry of HRD, New Delhi. IT Gopeshwar, is an
          institute that aims at promoting technological advancement, creating
          and maintaining academic environments and processes for the students
          to reach their full potential, develop into qualified professionals,
          and evolve into accountable members of society. In order for its
          students to develop into academically adept, creative, and
          entrepreneurial professionals, the institute offers a supportive
          environment. Moreover, the institute offers educational training that
          encourages and places a focus on social consciousness among the
          students as well as the development of professional abilities.While
          the institute offers such solutions that assist humanity and the
          environment, the knowledge of the students is broadened, strengthened,
          and enriched here at IT Gopeshwar.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
