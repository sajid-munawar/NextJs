"use client";
import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export const MetaverseMegic = () => {
  return (
    <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap={2} px='2em' py={['30px','30px','100px']}>
      <GridItem>
        <Image
          src="./metaverse_megic.png"
          objectFit="cover"
          alt="getting ready"
          borderRadius='20px'
          mt={['0','0','20px']}
        />
      </GridItem>
      <GridItem>
        <Box
          py={["10px",'15px','100px']}
          px="10px"
          textAlign={['start','start',"center"]}
        >
          <Heading fontSize={['xl','2xl','4xl']}>
          Metaverse Will Change Your Life Forever
          </Heading>
          <Text fontSize={['md','xl',"2xl"]} pt={['10px','15px',"20px"]}>
          "We've gone from desktop to web to mobile; from text to photo to
            video. But that's not the end. The next platform will be even more
            immersive. The embodiment of the web where you're part of the
            experience yourself, not just looking at it. That's what we call the
            metaverse..."
          </Text>
          <Box textAlign="right">
          <Text as="b" fontSize="2xl">
            Mark Zuckerberg
          </Text>
        </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};
