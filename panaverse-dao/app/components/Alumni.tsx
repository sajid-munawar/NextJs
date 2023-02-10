'use client'
import { SettingsIcon, StarIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export const Alumni = () => {
  return (
    <>
    <Flex justifyContent='space-around' py='70px' fontSize='24px' fontWeight='700'>
      <Box>State of the Art Techonology <SettingsIcon /> </Box>
      <Box>100+ Faculty <StarIcon/></Box>
      <Box>40k + Alumni <SunIcon/></Box>
    </Flex>
    </>
  )
}