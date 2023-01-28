"use client";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function PricingUi() {
  return (
    <>
      <Box bg={"#6B46C1"} textAlign="center" color={"#F7FAFC"} h={"397px"}>
        <Heading fontSize={"48px"} fontWeight={"800"} pt={"90px"}>
          Simple pricing for your business
        </Heading>
        <Text fontSize={"24px"} fontWeight={"500"}>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </>
  );
}
