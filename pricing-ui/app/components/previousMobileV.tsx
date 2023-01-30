"use client";
import Circle from "../assets/mdCheckedCircle/Circle.png";
import FirstIcon from "../assets/FirstIcon.png";
import SecondIcon from "../assets/SecondIcon.png";
import ThirdIcon from "../assets/ThirdIcon.png";
import Image from "next/image";
import {
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Text,
  Stack,
  Box,
  Card,
  VStack,
  CardHeader,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

export default function MyCard() {
  return (
    <>
      <Box bg={"#6B46C1"} h={"394px"} w={"428px"} padding={10}>
        <Stack spacing={"5"}>
          <Heading color={"#F7FAFC"} fontSize="2xl" fontWeight={"800"}>
            Simple pricing for your business
          </Heading>
          <Text color={"#F7FAFC"}>
            Plans that are carefully crafted to suit your business.
          </Text>
          <Card>
            <CardBody textAlign={"center"} p={"0"}>
              <Box bg={"#F0EAFB"} p={"8"}>
                <Stack spacing={"3"}>
                  <Heading fontSize={"24px"}>Premium PRO</Heading>
                  <Text fontSize={"5xl"} fontWeight={"800"}>
                    $329
                  </Text>
                  <Text>billed just once</Text>
                  <Button
                    variant="solid"
                    bg="#805AD5"
                    color={"#F7FAFC"}
                    px={"75px"}
                    _hover={{ color: "#805AD5", bg: "white" }}
                  >
                    Get Started
                  </Button>
                </Stack>
              </Box>
              <List spacing={5} pl={3} py={"40px"}>
                <ListItem>
                  Access these features when you get this pricing package for
                  your business.
                </ListItem>
                <ListItem display={"flex"}>
                  <Image src={Circle} alt="logo" />
                  <Text pl={3}>International calling and messaging API</Text>
                </ListItem>
                <ListItem display={"flex"}>
                  <Image src={Circle} alt="logo" />
                  <Text pl={3}>Additional phone numbers</Text>
                </ListItem>
                <ListItem display={"flex"}>
                  <Image src={Circle} alt="logo" />
                  <Text pl={3}>Automated messages via Zapier</Text>
                </ListItem>
                <ListItem display={"flex"}>
                  <Image src={Circle} alt="logo" />
                  <Text pl={3}>24/7 support and consulting</Text>
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </Stack>
        <List spacing={8} pl={1} py={"40px"}>
          <ListItem display={"flex"}>
            <Image src={FirstIcon} alt="logo" />
            <Text as="b" pl={3}>
              30 days money back Guarantree
            </Text>
          </ListItem>
          <ListItem as="b" display={"flex"}>
            <Image src={SecondIcon} alt="logo" />
            <Text as="b" pl={3}>
              No setup fees 100% hassle-free
            </Text>
          </ListItem>
          <ListItem as="b" display={"flex"}>
            <Image src={ThirdIcon} alt="logo" />
            <Text pl={3}>No monthly subscription Pay once and for all</Text>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
