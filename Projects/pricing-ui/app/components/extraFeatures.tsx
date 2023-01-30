import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import MoneyBack from "../assets/moneyBack";
import NoMonthlyFee from "../assets/noMonthlyFee";
import NosetupFee from "../assets/noSetupFee";

export default function ExtraFeatures() {
  return (
    <Box maxW="950px" mx={['22px','25px',"auto"]} fontSize={"18px"} fontWeight="700" py="60px">
      <Flex flexDirection={['column','column','row']}>
        <HStack  pb={'20px'}>
          <Icon as={MoneyBack}/>
          <Text pl='15px'>30 days money back Guarantee</Text>
        </HStack>
        <HStack  pb={'20px'}>
          <Icon as={NosetupFee} />
          <Text pl='15px'>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack>
          <Icon as={NoMonthlyFee} />
          <Text pl='15px'>No setup fees 100% hassle-free</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
