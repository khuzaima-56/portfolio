import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../index.css"

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box borderRadius="xl" bg="white" overflow="hidden">
      <VStack spacing={2}>
        <Box borderRadius="xl" overflow="hidden">
          <Image src={imageSrc} fit="fill" />
        </Box>

        <Box py={4}>
          <VStack px={5} spacing={4}>
            <Box width="100%">
              <Heading as="h3" size="md" color="black" textAlign="start">
                {title}
              </Heading>
            </Box>

            <Text
              fontSize="md"
              color="gray.500"
              fontFamily="stytem-ui"
              fontWeight="semibold">
              {description}
            </Text>
            <Box width="100%">
              <Text
                fontSize="md"
                color="black"
                fontWeight="semibold"
                cursor="pointer">
                See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
              </Text>
            </Box> 
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
