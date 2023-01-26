'use client';
import { ChakraProvider } from '@chakra-ui/react'
import Card from './components/card'

export default function Home() {
  return (
    <ChakraProvider>
      <Card/>
    </ChakraProvider>
  )
}
