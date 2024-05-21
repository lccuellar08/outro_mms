import { Box, VStack, Text, Link as ChakraLink} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'
import React from 'react';

const links = [
    {name: "About", link: "/main/about"},
    {name: "The Parties", link: ""},
    {name: "In Between", link: ""},
    {name: "Spaces", link: ""},
    {name: "Print", link: ""},
]

export default function Sidebar() {
    return (
        <VStack bg='black' color='white' width={'15%'} height={'100%'} paddingY='2rem' spacing={'2rem'}>
            {links.map((link) => {
                return (
                    <ChakraLink
                    as={RouterLink} to ={link.link}
                    id={link.name}
                    paddingX='0.5rem'
                    border='1px solid white'
                    borderRadius={'3px'}
                    cursor={'pointer'}
                    width={'12rem'}
                    _hover={{
                        bg: '#FB8B24',
                        color: '#5F0F40',
                        border: '1px solid #5F0F40'
                    }}>
                        <Text textAlign="left" fontSize={'1.5rem'}>
                            {link.name}
                        </Text>
                    </ChakraLink>
                )
            })}
        </VStack>
    );
}
