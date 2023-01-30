import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Flex,
  Image,
  Icon,
  StackProps,
  Stack,
  HStack,
} from "@chakra-ui/react";
import Circle from "../assets/mdCheckedCircle/circle";

export default function PricingCard() {
  return (
    <>
      <Box mt="-150px" mx="auto" maxW="950px" bg="white" borderRadius={'12px'}
      overflow='hidden' boxShadow={'2xl'}>
        <Flex>
          <Box bg="#E5E5E5" p="60px" textAlign={"center"}>
            <Heading fontSize={"24px"} fontWeight={"800"}>
              Premium PRO
            </Heading>
            <Text fontSize={"60px"} fontWeight={"800"}>
              $329
            </Text>
            <Text fontSize={"18px"} fontWeight={"500"}>
              billed just once
            </Text>
            <Button colorScheme={"purple"} size="lg" w="282px" mt="24px">
              Get Started
            </Button>
          </Box>
          <Box fontSize={"18px"} textAlign="left" p="48px" fontWeight="400">
            <Text pb={"4"}>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <HStack pb="2">
              <Icon as={Circle} />
              <Text>International calling and messaging API</Text>
            </HStack>
            <HStack pb="2">
              <Icon as={Circle} />
              <Text>Additional phone numbers</Text>
            </HStack>
            <HStack pb="2">
              <Icon as={Circle} />
              <Text>Automated messages via Zapier</Text>
            </HStack>
            <HStack pb="2">
              <Icon as={Circle} />
              <Text>24/7 support and consulting</Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
