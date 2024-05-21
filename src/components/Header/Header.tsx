import { Box, Flex, HStack, Link as ChakraLink} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

export default function Header() {
    return (
        <Flex w="100%" px="6" py="5" align="center" justify="space-between" bg='black'>
            <ChakraLink as={RouterLink} to='/main' color='white'>
                Outro
            </ChakraLink>
        </Flex>
    )
}
