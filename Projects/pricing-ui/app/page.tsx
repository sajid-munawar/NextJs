'use client';
import { Inter } from '@next/font/google'
import MyCard from './components/card'
import { ChakraProvider } from '@chakra-ui/react'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
  <div className={inter.className}>
    <ChakraProvider>
      <MyCard/>
    </ChakraProvider>
  </div>
    </>
  )
}
