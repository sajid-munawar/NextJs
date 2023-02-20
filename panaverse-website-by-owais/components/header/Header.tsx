"use client";
import { MoonIcon, SearchIcon } from "@chakra-ui/icons";
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
import Link from "next/link";
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
          <Box as="span">
            <SearchIcon w="25" h="25" />
          </Box>
          <Box as="span" px="15">
            <MoonIcon w="25" h="25" />
          </Box>
          <Link target={"_blank"} href="https://www.piaic.org/">
            <Button variant={"outline"}>Go to PIAIC</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
