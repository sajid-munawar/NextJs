"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Link
} from "@chakra-ui/react";
import React from "react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";


export default function TopContainer() {
  return (
    <Box backgroundImage={"/images/bg.webp"} bgSize="contain" py="20" mt='2'>
      {/* left Box */}
      <HStack>
        <Box width="50%" color="white" pl="44">
          <Heading fontSize={60}>Build your next idea even faster</Heading>
          <Text lineHeight={"8"} mb="5">
            One Year Panaverse DAO Earn as you Learn Program. Consolidating Web
            3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and
            Ambient Computing/IoT Technologies
          </Text>
          <Button colorScheme={"blue"} mr="2">
            Buy Now
          </Button>
          <Button colorScheme={"blue"} variant="outline">
            View Components
          </Button>
          <Flex mt="5" align={"center"}>
            <AvatarGroup size="md" max={4} mr='2'>
              <Avatar
                name="Zia Khan"
                src="https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg"
              />
              <Avatar
                name="Adil Altaf"
                src="https://avatars.githubusercontent.com/u/62209503?v=4"
              />
              <Avatar
                name="Owais Ali"
                src="https://chakrademosite-ows-ali.vercel.app/me.jpg"
              />
              <Avatar
                name="Sajid Munawar"
                src="https://avatars.githubusercontent.com/u/66992901?v=4"
              />
              <Avatar
                name="Sajid Munawar"
                src="https://avatars.githubusercontent.com/u/66992901?v=4"
              />
              <Avatar
                name="Sajid Munawar"
                src="https://avatars.githubusercontent.com/u/66992901?v=4"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
            <Box>
              <Text>Tutorial By: <Link target={'_blank'} color='blue.500' href='https://www.youtube.com/@owaisali124'>Owais Ali</Link></Text>
              <Text>Created By: <Link target={'_blank'} color='blue.500' href='https://github.com/sajid-munawar'>Sajid Munawar</Link></Text>
            </Box>
          </Flex>
        </Box>
        {/* right box */}
        <Box>
          <Image src="/images/banner.png" />
        </Box>
      </HStack>
    </Box>
  );
}
