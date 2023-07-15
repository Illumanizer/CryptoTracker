import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Box w={'full'} h={'72vh'}  bgColor={"blackAlpha.900"}>
    <Image w={'full'} h={'full'} objectFit={'contain'} src={'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2302&q=80'}/>
    <Text fontSize={'6xl'} textAlign={'center'} m={'2'} color={'white'} fontWeight={'bold'}>Crypto Tracker</Text>
    </Box>
  )
}

export default Home