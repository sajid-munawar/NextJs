"use client";
import React from "react";
import Image from "next/image";
import metaverseMegic from "../assets/metaverse_megic.png";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const MetaverseMegic = () => {
  return (
    <Flex
      justifyContent={["flex-start", "flex-start", "space-around"]}
      alignItems="center"
      flexDir={["column", "column", "row"]}
      py={["0", "0", "50px"]}
    >
      <Box maxWidth={["100%", "100%", "50%"]}>
        <Image
          src={metaverseMegic}
          alt="getting ready"
          className="gettingReady"
        />
      </Box>
      <Box
        maxWidth={["100%", "100%", "40%"]}
        py="10px"
        px="50px"
        textAlign="center"
      >
        <Heading>Metaverse Will Change Your Life Forever</Heading>
        <Box textAlign="start" px={["20px", "0", "0"]}>
          <Text as="i" fontSize="2xl" pt="20px">
            "We've gone from desktop to web to mobile; from text to photo to
            video. But that's not the end. The next platform will be even more
            immersive. The embodiment of the web where you're part of the
            experience yourself, not just looking at it. That's what we call the
            metaverse..."
          </Text>
          <br />
        </Box>
        <Box textAlign="right" pb={["100px", "100px", "0"]}>
          <Text as="b" fontSize="2xl">
            Mark Zuckerberg
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
