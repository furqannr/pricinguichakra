import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import icon1 from './icons/icon1'
import icon2 from './icons/icon2'
import icon3 from './icons/icon3'

export default function Features() {
  return (
    <Box display={'flex'}
    maxW='700px'
    m={'auto'}
    mt={'30px'}
    >
        <HStack p={'15px'} >
      <Icon as ={icon1}></Icon>
        <Text>International messaging and calling API</Text>
        </HStack>
        <HStack p={'15px'}>
        <Icon as ={icon2}></Icon>
      <Text >Additional phone numbers</Text>
      </HStack>
        <HStack p={'15px'}>
      <Icon as ={icon3}></Icon>
      <Text>Additional personal messages option</Text>
      </HStack>
    </Box>
  )
}
