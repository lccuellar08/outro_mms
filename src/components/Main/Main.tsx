import { Box, HStack, VStack, Image, Center } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import About from '../About/About'

export default function Main() {

    function MainContent() {
        return (
            <Box bg='#1c1c1c' color='white' h={'100%'} margin='2rem'>
                <Center paddingY='2rem'>
                    <Image src='https://media.tenor.com/TC6YHaAEWC8AAAAM/beerdog-dog-beer.gif'
                        width='50%'/>
                </Center>
            </Box>
        )
    }

    return (
        <>
        <Box height='90dvh'>
            <Header />
            <HStack height='100%'>
                <Sidebar />
                <Box w='100%' height={'100%'}>
                    <Routes>
                        <Route path={`/about`} element={<About />}/>
                        <Route path="/" element={<MainContent />}/>
                    </Routes>
                </Box>
            </HStack>
        </Box>
        </>
    )
}
