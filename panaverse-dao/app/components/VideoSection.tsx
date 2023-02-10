"use client";
import { AspectRatio, Box } from "@chakra-ui/react";

export const VideoSection = () => {
  return (
    <AspectRatio
      w={{ base: 380, md: 450, lg: 700 }}
      h={{ base: 300, lg: 526 }}
      ratio={1}
      rounded={"3xl"}
      overflow={"hidden"}
    >
      <iframe
        src="https://www.youtube.com/embed/PwLzOxLe4zc"
        title="PIAIC Registrations Open Now in METAVERSE Course"
      />
    </AspectRatio>
  );
};
