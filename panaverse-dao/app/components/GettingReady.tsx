"use client";
import React from "react";
import Image from "next/image";
import gettingReady from "../assets/gettingReady.jpg";
import { Box,Flex, Heading, Text } from "@chakra-ui/react";

export const GettingReady = () => {
  return (
    <Flex justifyContent="space-around" alignItems="center">
      <Box maxWidth="50%">
        <Image
          src={gettingReady}
          alt="getting ready"
          className="gettingReady"
        />
      </Box>
      <Box maxWidth="40%" padding="10px" textAlign="center">
        <Heading >
          Getting Ready for the Next Generation of the Internet
        </Heading>
        <Text fontSize='2xl' pt='20px'>
          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud,
          Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics
          Technologies{" "}
        </Text>
      </Box>
    </Flex>
  );
};
