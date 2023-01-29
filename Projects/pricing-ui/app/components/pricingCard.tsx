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

export const ListItem=(props:StackProps)=>{
  const {children,...rest}=props;
  return (
    <HStack as='li' spacing='20px' {...rest}>
      <Icon as={Circle} w='22px' h='22px' />
      <Text>{children}</Text>
    </HStack>
  )
}

export default function PricingCard() {
  return (
    <>
      <Box>
        <Flex>
          <Box bg="#E5E5E5" p="60px" textAlign={'center'}>
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
          <Box>
            <Text fontSize={"18px"} fontWeight={"400"}>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as='ul'>
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>International calling and messaging API</ListItem>
            </Stack>

          </Box>
        </Flex>
      </Box>
    </>
  );
}