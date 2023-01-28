'use client';

import PricingUi from './components/pricingUi'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (<>
  <div>
    <ChakraProvider>
      <PricingUi/>
    </ChakraProvider>
  </div>
    </>
  )
}
