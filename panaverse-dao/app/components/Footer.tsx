"use client";
import { Box, Button, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { Facebook } from "../assets/Facebook";
import { Instagram } from "../assets/Instagram";
import { Tiktok } from "../assets/Tiktok";
import { Twitter } from "../assets/Twitter";
import { Youtube } from "../assets/Youtube";

export const Footer = () => {
  return (
    <>
      <Box bgColor="#DFD3BB" pt={['20px','30px',"50px" ]} pb='50px' textAlign={'center'}>
        <Flex
        flexDir={['column','column','row']}
          gap="20px"
          justifyContent={['center','center',"space-around"]}
          alignItems={['center','center',"start"]}
          py="50px"
          fontSize="17px"
          fontWeight="500"
          lineHeight="130%"
        >
          <Flex flexDirection="column" gap="10px">
            <Heading as="h6" size="md" pb="20px">
              Follow us
            </Heading>
            <Flex flexDir={['row','row','column']} gap={3}>
            <Icon as={Facebook} />
            <Icon as={Instagram} />
            <Icon as={Tiktok} />
            <Icon as={Twitter} />
            <Icon as={Youtube} />
            </Flex>
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
        <Flex justifyContent="space-around" alignItems="center" pt="20px">
          <Text>© Panaverse Dao,Inc</Text>
          <Button size="lg" px="50px">
            Join now
          </Button>
        </Flex>
      </Box>
    </>
  );
};
