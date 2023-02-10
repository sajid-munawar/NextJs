"use client";
import React from "react";
import Image from "next/image";
import metaverseMegic from "../assets/metaverse_megic.png";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const MetaverseMegic = () => {
  return (
    <Flex justifyContent="space-around" alignItems="center" py='50px'>
      <Box maxWidth="50%">
        <Image
          src={metaverseMegic}
          alt="getting ready"
          className="gettingReady"
        />
      </Box>
      <Box maxWidth="40%" padding="10px" textAlign="center">
        <Heading>Metaverse Will Change Your Life Forever</Heading>
        <Box textAlign="start">
          <Text as="i" fontSize="2xl" pt="20px">
            "We've gone from desktop to web to mobile; from text to photo to
            video. But that's not the end. The next platform will be even more
            immersive. The embodiment of the web where you're part of the
            experience yourself, not just looking at it. That's what we call the
            metaverse..."
          </Text>
          <br />
        </Box>
        <Box textAlign="right">
          <Text as="b" fontSize="2xl">
            Mark Zuckerberg
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
