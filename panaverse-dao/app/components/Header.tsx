"use client";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Link } from "@chakra-ui/react";
import panaverseDao from "../assets/logo.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Header = () => {
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
      </Flex>
      <Box textAlign="center" className="bgImage" mt="5px" height={"200px"}>
        <Heading as="h1" size="2xl" color="#000" pt="40px">
          Certified Web 3.0 and Metaverse Developer
        </Heading>
        <Text color="#4c4f54" fontSize="xl" pt="10px" pb="50px">
          A One and Quarter Years Panaverse DAO Earn as you Learn Program
        </Text>
      </Box>
      
    </>
  );
};
