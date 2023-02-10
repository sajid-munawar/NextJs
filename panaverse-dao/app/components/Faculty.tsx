"use client";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import ziaK from "../assets/zia_khan.jpg";
import daniyalN from "../assets/daniyal_nagori.jpeg";
import zeeshanH from "../assets/zeeshan_hanif.jpeg";
import adilA from "../assets/adil_altaf.jpg";
import hiraK from "../assets/hira-khan.jpg";
import asifS from "../assets/asif-shah.jpg";

const faculty = [
  {
    image: ziaK,
    title: "Zia Khan",
    designation: "CEO Panacloud",
    details:
      "CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education.",
  },
  {
    image: daniyalN,
    title: "Daniyal Nagori",
    designation: "Software Development Lead at Panacloud Pvt Ltd",
    details:
      "Certified Kubernetes Application Developer AWS Certified Developer Coursera React Native Nano Degree. I have been fortunate to be able to architect solutions in as wide an array as Cloud Native.",
  },{
    image: zeeshanH,
    title: "Zeeshan Hanif",
    designation: "Head of Software Development at Panacloud Pvt Ltd",
    details:
      "Software development certified from IBM, SUN and Microsoft. Also passed Certified Management Accountant (CMA) examinations from Institute of Management Accountant (IMA).",
  },{
    image: adilA,
    title: "Adil Altaf",
    designation: "CEO at Axiom Enterprises",
    details:
      "He have been working in the software industry for over a decade in which I have accumulated a vast amount of knowledge and experience in all areas of the Full Stack SDLC including architecture and design.",
  },{
    image: hiraK,
    title: "Hira Khan",
    designation: "Director at the Women Empowerment Div. of PIAIC",
    details:
      "I am the Director of the Women Empowerment of the Presidential Initiative for Artificial Intelligence & Computing. The mission of PIAIC is to reshape Pakistan by revolutionizing education.",
  },{
    image: asifS,
    title: "Asif Shah",
    designation: "International Council of Design Member",
    details:
      "Communication Arts Annual Typography Award Discussion On Blog International Council of Design Member Communicator Awards Package Design Graphis Poster Design For Brand Barcode.",
  },
];

export const Faculty = () => {
  return (
    <Box py="50px" bgColor="#DFD3BB" >
      <Heading as='h1' textAlign='center'>Our Proud Faculty</Heading>
      <Box bg='black' textAlign='center' width='50px' height='2px' margin='auto' mb='70px'></Box>
      <Grid      
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={10}
        px='30px'
      >
        {faculty.map((f) => {
          return (
            <GridItem>
              <Flex>
                <Image src={f.image} alt={f.title} className="facultyImg"/>
                <Flex flexDirection="column" justifyContent="flex-start" gap='5px' px='10px'>
                  <Text fontSize='1.3rem' fontWeight='bold'>{f.title}</Text>
                  <Text fontSize='1.3rem'>{f.designation}</Text>
                  <Text>{f.details}</Text>
                </Flex>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
