import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box textAlign={'center'} bgColor={'#6B46C1'} pt={'40px'} pb={'100px'} color={'White'}>
        <Heading pb={'10px'}>Simple pricing for your business</Heading>
<Text>Plans that are carefully crafted to suit your business</Text>
    </Box>
  )
}
