"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box
      as="section"
        bg="#6B46C1"
        textAlign="center"
        color="#F7FAFC"
        pt="90px"
        pb="198px"
        px="32px"
      >
        <Heading fontSize="48px" fontWeight="800">
          Simple pricing for your business
        </Heading>
        <Text fontSize="24px" fontWeight="500" pt="16px">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </>
  );
}
