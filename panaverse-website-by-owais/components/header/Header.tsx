"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box pt={5}>
      <Flex justifyContent={"space-around"} alignItems="center">
        {/* left area */}
        <Box>
          <HStack>
            <Image src="/images/Logo.webp" alt="logo" />
            <List>
              <HStack spacing={10} ml="50px" fontWeight="bold">
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Contact</ListItem>
              </HStack>
            </List>
          </HStack>
        </Box>
        {/* Right area */}
        <Box>
          <Button variant={'outline'}>Go to PIAIC</Button>
        </Box>
      </Flex>
    </Box>
  );
}
