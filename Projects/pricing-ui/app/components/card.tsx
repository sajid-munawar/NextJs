"use client";
import {
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Text,
  Image,
  Stack,
  Box,
  Card,
  VStack,
  CardHeader,
} from "@chakra-ui/react";

export default function MyCard() {
  return (
    <>
      <Box>
        <Box bg={"#6B46C1"} h={"394px"} w={"428px"} padding={10}>
          <Stack spacing={'5'}>
            <Heading color={"#F7FAFC"} fontSize="2xl" fontWeight={"800"}>
              Simple pricing for your business
            </Heading>
            <Text color={"#F7FAFC"}>
              Plans that are carefully crafted to suit your business.
            </Text>
            <Card bg={'#F0EAFB'} p={'8'}>
              <CardBody textAlign={'center'}>
               <Stack spacing={'3'}>
                <Heading fontSize={'24px'}>Premium PRO</Heading>
                <Text fontSize={'5xl'} fontWeight={'800'}>$329</Text>
                <Text>billed just once</Text>
                <Button variant="solid" bg="#805AD5" color={'#F7FAFC'} px={'75px'} _hover={{color:'#805AD5',bg:'white'}} >
                Get Started
                </Button>
                </Stack>
              </CardBody>
            </Card>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
