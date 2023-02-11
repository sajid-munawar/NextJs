"use client";
import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export const GettingReady = () => {
  return (
    <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap={2} px='2em'>
      <GridItem>
        <Image
          src="./gettingReady.jpg"
          objectFit="cover"
          alt="getting ready"
          borderRadius='20px'
          mt='20px'
        />
      </GridItem>
      <GridItem>
        <Box
          py={["10px",'15px','100px']}
          px="10px"
          textAlign={['start','start',"center"]}
        >
          <Heading fontSize={['xl','2xl','4xl']}>
            Getting Ready for the Next Generation of the Internet
          </Heading>
          <Text fontSize={['md','xl',"2xl"]} pt={['10px','15px',"20px"]} color='#718096'>
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics Technologies{" "}
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};
