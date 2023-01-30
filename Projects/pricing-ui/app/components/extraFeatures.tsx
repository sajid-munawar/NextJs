import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import MoneyBack from "../assets/moneyBack";
import NoMonthlyFee from "../assets/noMonthlyFee";
import NosetupFee from "../assets/noSetupFee";

export default function ExtraFeatures() {
  return (
    <Box maxW="950px" mx="auto" fontSize={"18px"} fontWeight="700" pt="60px">
      <Flex>
        <HStack>
          <Icon as={MoneyBack} />
          <Text>30 days money back Guarantee</Text>
        </HStack>
        <HStack>
          <Icon as={NosetupFee} />
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack>
          <Icon as={NoMonthlyFee} />
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
