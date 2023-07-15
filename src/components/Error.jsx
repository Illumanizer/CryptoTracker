import { Alert } from '@chakra-ui/react'
import React from 'react'

const Error = ({msg}) => {
  return (
    <Alert
    status='error'
    w={'container.lg'}
    >
    {msg}
    </Alert>
  )
}

export default Error