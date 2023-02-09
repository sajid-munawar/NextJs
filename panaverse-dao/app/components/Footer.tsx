"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box bgColor="#DFD3BB" py='50px'>
        <Flex gap="20px" justifyContent="space-around" py="50px">
          <Flex flexDirection="column" gap="5px">
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
            <Box>4</Box>
            <Box>5</Box>
          </Flex>
          <Flex flexDirection="column" gap="5px">
            <Heading as="h6" size="md" pb="20px">
              Free apps
            </Heading>
            <Text>iPhone app</Text>
            <Text>Android app</Text>
            <Text>API (developers)</Text>
          </Flex>
          <Flex flexDirection="column" gap="5px">
            <Heading as="h6" size="md" pb="20px">
              Company
            </Heading>
            <Text>About us</Text> <Text>Careers</Text> <Text>Tech blog</Text>
            <Text>LinkedIn</Text> <Text>Press release</Text>
          </Flex>
          <Flex flexDirection="column" gap="5px">
            <Heading as="h6" size="md" pb="20px">
              Support
            </Heading>
            <Text>Help Center</Text>
            <Text>Safety Center</Text>
            <Text>Community Guidelines</Text>
          </Flex>
          <Flex flexDirection="column" gap="5px">
            <Heading as="h6" size="md" pb="20px">
              Help & legal
            </Heading>
            <Text>Help center</Text> <Text>Facebook community</Text>
            <Text>Terms & conditions</Text>
            <Text>Privacy policy</Text>
          </Flex>
        </Flex>
        <Flex justifyContent='space-around' alignItems='center' pt='20px'>
          <Text>Panaverse Dao,Inc</Text>
          <Button size="lg" px='50px'>Join now</Button>
        </Flex>
      </Box>
    </>
  );
};
