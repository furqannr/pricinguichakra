import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box textAlign={{base : 'left', md:'left', lg:'center' }} bgColor={'#6B46C1'} pl={'10px'} h={'300px'} pt={'40px'} pb={'100px'} color={'White'}>
        <Heading pb={'10px'}>Simple pricing for your business</Heading>
<Text pb='10px'>Plans that are carefully crafted to suit your business</Text>
    </Box>
  )
}
