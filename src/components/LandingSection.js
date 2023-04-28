import React from "react";
import { Avatar, Heading, VStack, defineStyle } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { whiten } from "@chakra-ui/theme-tools";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4366">
    <VStack spacing={8}>
      <VStack spacing={3}>
        <Avatar size="xl" name="pete" src="https://i.pravatar.cc/150?img=7" />
        <Heading fontFamily="arial" size="xs" fontWeight="semibold">
          {greeting}
        </Heading>
      </VStack>

      <VStack spacing={1}>
        <Heading fontFamily="arial" size="xl">
          {bio1}
        </Heading>

        <Heading fontFamily="arial" size="xl">
          {bio2}
        </Heading>
      </VStack>
      
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
