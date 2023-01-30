'use client';

import Header from './components/Header'
import { ChakraProvider } from '@chakra-ui/react'
import PricingCard from './components/pricingCard';
import ExtraFeatures from './components/extraFeatures';

export default function Home() {
  return (<>
  <div>
    <ChakraProvider>
      <Header/>
      <PricingCard/>
      <ExtraFeatures/>
    </ChakraProvider>
  </div>
    </>
  )
}
