"use client";
import React from "react";
import Image from "next/image";
import gettingReady from "../assets/gettingReady.jpg";
import { Box,Flex, Heading, Text } from "@chakra-ui/react";

export const GettingReady = () => {
  return (
    <Flex justifyContent={['flex-start','flex-start',"space-around" ]}alignItems="center" flexDir={['column','column','row']}>
      <Box maxWidth={['100%','100%',"50%"]} mt={['-50px','-20px','0']}>
        <Image
          src={gettingReady}
          alt="getting ready"
          className="gettingReady"
        />
      </Box>
      <Box maxWidth={['100%','100%',"40%"]} py="10px" px='20px' textAlign="center">
        <Heading >
          Getting Ready for the Next Generation of the Internet
        </Heading>
        <Text fontSize='2xl' pt='20px' >
          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud,
          Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics
          Technologies{" "}
        </Text>
      </Box>
    </Flex>
  );
};
