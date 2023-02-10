"use client";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
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
      "Certified Kubernetes Application Developer AWS Certified Developer Coursera React Native Nano Degree. I have been fortunate to be able to architect solutions in as wide an array as Cloud Native, Voice Computing/Chatbot development, Web, Mobile, AI, and Blockchain. ",
  },{
    image: zeeshanH,
    title: "Zeeshan Hanif",
    designation: "Head of Software Development at Panacloud Pvt Ltd",
    details:
      "Software development certified from IBM, SUN and Microsoft. Also passed Certified Management Accountant (CMA) examinations from Institute of Management Accountant (IMA), New Jersey and Level 2 of Chartered Financial Analyst (CFA), Charlottesville, Virginia.",
  },{
    image: adilA,
    title: "Adil Altaf",
    designation: "CEO at Axiom Enterprises",
    details:
      "He have been working in the software industry for over a decade in which I have accumulated a vast amount of knowledge and experience in all areas of the Full Stack SDLC including architecture and design, development, implementation, integration, and deployment.",
  },{
    image: hiraK,
    title: "Hira Khan",
    designation: "Director at the Women Empowerment Div. of PIAIC",
    details:
      "I am the Director of the Women Empowerment of the Presidential Initiative for Artificial Intelligence & Computing. The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.",
  },{
    image: asifS,
    title: "Asif Shah",
    designation: "International Council of Design Member",
    details:
      "Communication Arts Annual Typography Award Discussion On Blog International Council of Design Member Communicator Awards Package Design Graphis Poster Design For Brand Barcode Marcom 2010 Platinum Awardsi2u design studio Wucht Fruit Flavored Water Ltd W3 Awards",
  },
];

export const Faculty = () => {
  return (
    <Box py="50px">
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={6}
      >
        {faculty.map((f) => {
          return (
            <GridItem>
              <Flex>
                <Image src={f.image} alt={f.title} className="facultyImg" />
                <Flex flexDirection="column" justifyContent="flex-start">
                  <Text>{f.title}</Text>
                  <Text>{f.designation}</Text>
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
