"use client";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { Link } from "@chakra-ui/react";
import panaverseDao from "../assets/logo.png";
import { CloseIcon, ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";

export const Header = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <>
      <Flex px="5%" py="1.2%">
        <Box w="20%">
          <Link href="/">
            <Image src={panaverseDao} alt="panaverse dao" width={100} />
          </Link>
        </Box>
        <Spacer />
        <Flex
          display={["none", "none", "none", "flex"]}
          gap="35px"
          fontSize="20px"
          fontWeight="600"
          lineHeight="130%"
          px="5%"
          py="1.2%"
          color="black"
          borderColor="#e5e7eb"
          justifyContent={"center"}
          alignItems="center"
        >
          <Box>Courses</Box>
          <Box>Faculty</Box>
          <Box>About us</Box>
          <Box>Mission</Box>
          <Spacer />
          <Spacer />
          <Box>
            <Link href="https://portal.piaic.org/" isExternal>
              Sign in <ExternalLinkIcon mx="2px" />
            </Link>
            <Link href="https://portal.piaic.org/signup" isExternal pl="10px">
              Sign up <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        </Flex>
        <IconButton
        aria-label="Open Menu"
        size="lg"
        mr="2"
        bg='white'
        icon={<HamburgerIcon />}
        display={["flex", "flex", "flex", "none"]}
        onClick={() => changeDisplay("flex")}
      />
      </Flex>
      <Flex
        w="100vw"
        h="100vh"
        bg="gray.50"
        zIndex={20}
        position="fixed"
        top="0"
        left="0"
        overflow="auto"
        flexDirection="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            aria-label="Close Menu"
            size="lg"
            mt="2"
            mr="10"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Box>Courses</Box>
          <Box>Faculty</Box>
          <Box>About us</Box>
          <Box>Mission</Box>
        </Flex>
      </Flex>
      <Box textAlign={['start','start',"center"]} className="bgImage" mt="5px" height={"200px"} px='20px'>
        <Heading as="h1" size={['lg','xl',"2xl"]} color="#000" pt="40px">
          Certified Web 3.0 and Metaverse Developer
        </Heading>
        <Text color="#4c4f54" fontSize={['md','lg',"xl"]} pt="10px" pb={['20px','30px',"50px"]} >
          A One and Quarter Years Panaverse DAO Earn as you Learn Program
        </Text>
      </Box>
    </>
  );
};
