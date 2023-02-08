"use client";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Link } from "@chakra-ui/react";
import panaverseDao from './assets/logo.png'
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Header = () => {
  return (
    <Flex
      gap="20px"
      fontSize="20px"
      fontWeight="600"
      lineHeight="130%"
      px="5%"
      py="2%"
      color="black"
      borderColor="#e5e7eb"
    >
      <Box w="20%">
        <Link href="/">
            <Image src={panaverseDao} alt='panaverse dao'/>
        </Link>
      </Box>
      <Spacer />
      <Box>logo</Box>
      <Box>logo</Box>
      <Box>logo</Box>
      <Box>logo</Box>
      <Spacer />
      <Spacer />
      <Box>
      <Link href="https://portal.piaic.org/" isExternal>
        Sign in <ExternalLinkIcon mx="2px" />
      </Link>
      <Link href="https://portal.piaic.org/signup" isExternal pl='10px'>
        Sign up <ExternalLinkIcon mx="2px" />
      </Link>
      </Box>
      
    </Flex>
  );
};
