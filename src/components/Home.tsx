import { Box, Button, Center, Img, Stack, Link as ChakraLink} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import {ReactComponent as FrameSVG} from '../assets/frame.svg'
import HomeCarousel from './HomeCarousel'

export default function Home() {
    return (
        <Box display="flex" flexDirection={'column'} h={'100vh'} bg='black'>
            <Box color='white' h={{
                base: '20%',
                md: '30%',
            }}
            paddingX={{
                base: '1em',
                md: 0,
            }}
            >
                <Center h='100%'>
                    <ChakraLink as={RouterLink} to='/main'>
                        <Button colorScheme='yellow' variant='outline' size='lg'
                            height={{
                                base: '6rem',
                                md: '8rem'
                            }}
                            width={{
                                base: '28rem',
                                md: '32rem'
                            }}
                            borderWidth={'4px'}
                            fontSize={{
                                base: '3rem',
                                md: '4rem'
                            }}>
                            outro
                        </Button>
                    </ChakraLink>
                </Center>
            </Box>
            <Box color='white' flex={1} height='100%'
                padding="2rem">
                <Box width="100%" height="100%" borderRadius={"4px"} border={'4px solid white'}>
                    <HomeCarousel />
                </Box>
            </Box>
        </Box>
    )
}
