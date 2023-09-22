import React from 'react'
import Carousel from 'react-multi-carousel'
import { Box, Typography, styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import collegeImages from '../../constant/collegeImages';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const Image = styled('img') ({
    width: '475px',
    height: '290px',
    borderRadius:'5px',
});
const Banner=styled(Carousel)({
  paddingLeft:'5rem',
  '& > button':{
    display:'none',
  }
})

const Act = () => {
  return (
    <Box marginTop={8} background="black">

    <Box marginBottom={2}><Typography textAlign={'center'} fontSize={'32px'} fontWeight={700}  color="#7E1717">Recent Activity</Typography></Box>
    <Box height={'400px'} sx={{backgroundColor:"#f1f1f1"}} display={'flex'}>

 
    <Banner  swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    keyBoardControl={true}
    customTransition="ease .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    
    >
       
       
                <Image src="./assets/act1.png" alt='banner' />
                <Image src="./assets/act2.png" alt='banner' />
                <Image src="./assets/act3.png" alt='banner' />
                <Image src="./assets/img/cricket.jpg" alt='banner' />
                <Image src="./assets/img/sing.jpg" alt='banner' />
                <Image src="./assets/img/volly.jpg" alt='banner' />
          

    </Banner>
    </Box>
    </Box>
  )
}

export default Act