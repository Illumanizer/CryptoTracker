import { Avatar, Box, Button, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaYoutube,FaInstagram,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
    bgColor={'blackAlpha.900'}
    color={'whiteAlpha.700'}
    px={'16'}
    py={['16','8']}
    minH={'48'}>

    <Stack direction={['column','row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center','flex-start']} >
        <Text fontWeight={'bold'}> About Us </Text>
        <Text fontSize={'sm'} letterSpacing={'wider'} textAlign={['center','left']}> Track any crypto currency on your fingertips using free public api</Text>
        </VStack>

        <HStack w={'full'} >    
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://youtube.com">
              {<FaYoutube color={'white'} size={40}/>}
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'} px={'1.5'}>
            <a target={'black'} href="https://instagram.com">
              {<FaInstagram color={'white'} size={40}/>}
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}px={'1.5'}>
            <a target={'black'} href="https://github.com/illumanizer">
              {<FaGithub color={'white'} size={40}/>}
            </a>
          </Button>
        </HStack>

        <VStack>
            <Avatar boxSize={'28'} mt={['4','0']}/>
            <Text fontWeight={'bold'}> Founder</Text>
            <Text> Pranav</Text>
        </VStack>
    </Stack>
    </Box>
  )
}

export default Footer