import { Box, Center, Flex, Image } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carousel_img_01 from "../assets/Home/carousel_01.png"
import carousel_img_02 from "../assets/Home/carousel_02.png"
import React from 'react'

export default function HomeCarousel() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }

    return (
        <Box height="100%"  width={"100%"} padding={{base: "1em", md: "4em"}}>
            <Carousel responsive={responsive}
                swipeable={false}
                draggable={false}
                containerClass="carousel-container"
                className='carousel-style'
                infinite={true}
                customTransition='transform 900ms ease-in-out'
                transitionDuration={900}
                autoPlaySpeed={5000}
                autoPlay={true}>
                <Flex height="100%" width={{base: "100%", md:"50%"}} alignContent={'center'} justifyContent={'center'} alignItems={'center'}>
                    <Image
                    marginLeft={{base: 0, md: "100%"}}
                    alignContent={'center'} justifyContent={'center'} alignItems={'center'}
                    // width={"100%"}
                    // height={"100%"}
                    objectFit={'scale-down'}
                    src={carousel_img_01}
                    alt="Carousel Image"/>
                </Flex>
                <Flex height="100%" width={{base: "100%", md:"50%"}} alignContent={'center'} justifyContent={'center'} alignItems={'center'}>
                    <Image
                    alignContent={'center'} justifyContent={'center'} alignItems={'center'}
                    marginLeft={{base: 0, md: "100%"}}
                    width={"100%"}
                    height={"100%"}
                    objectFit={'scale-down'}
                    src={carousel_img_02}
                    alt="Carousel Image"/>
                </Flex>
            </Carousel>
        </Box>
    )
}
