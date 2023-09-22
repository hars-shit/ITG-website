import React from 'react'
import Carousel from 'react-multi-carousel'
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import collegeImages from '../constant/collegeImages';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
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
    width: '100%',
    height: 530,
    objectFit:'cover',
    transition: 'transform 0.8s ease-in-out',
    '& : hover':{
        transform: "scale(1.05)",
    }
});

const Banner = () => {
  return (
    <Carousel   swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    keyBoardControl={true}
    customTransition="ease .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    
    >
        {/* {
            collegeImages.map(data=>(
                 <Image src={data.url} alt='banner'/>
            ))
        } */}
        {
            collegeImages.map(data=>(
                <Image src={data.imgPath} alt='banner' />
            ))
        }

    </Carousel>
  )
}

export default Banner