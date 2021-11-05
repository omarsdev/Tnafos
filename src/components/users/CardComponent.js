import { Box, Image, VStack } from '@chakra-ui/react';
import React from 'react'

export const CardComponent = ({ userData }) => {
    return (
        <VStack>
            <Box>
            <Image
                boxSize="150px"
                objectFit="cover"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="user-img"
            />
            </Box>
            <Box>
                <Box>{userData.first_name} {userData.last_name}</Box>
                <Box>{userData.uuid}</Box>
            </Box>
        </VStack>
    )
}
