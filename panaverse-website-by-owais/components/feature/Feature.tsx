"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Feature() {
  return (
    <Box py="50">
      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Features
        </Text>
        <Heading fontWeight={"semibold"}>What you can expect?</Heading>
        <Text>
          A bundle of 220+ ready-to-use, responsive and accessible components
          with clever structured sourcecode files.
        </Text>
      </Box>
    </Box>
  );
}
