import React from "react";
import { Center, Box, Flex, Text, Checkbox,Button } from "@chakra-ui/react";

export default function Home() {
  // Array of texts
  const texts = [
    "Weight Loss",
    "Muscle Gain",
    "Flexibility and Mobility",
    "General Fitness",
    "Event-specific Training",
    "Mindfulness and Mental Health"
  ];

  return (
    <Center>
      <Box w="400px" p="4" borderRadius="lg" mt="2rem">
        <Text textAlign="center" fontSize="xl" fontWeight="bold" mb="2rem">What are your goals?</Text>
        <Flex direction="column">
          {texts.map((text, index) => (
            <Box key={index} bg="gray.100" mt="1rem" px="8px" py="12px" borderRadius="lg">
              <Flex alignItems="center" justifyContent="space-between" mb="0.5rem">
                <Text fontWeight="600" fontSize='12px'>{text}</Text>
                <Checkbox  border="1px  #CBD5E0" />
              </Flex>
            </Box>
          ))}
        </Flex>
        <Flex mt="5rem">
        <Button  bg="linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)" color="white" fontSize="16px" w="100%">Confirm</Button>
            
        </Flex>
      </Box>
    </Center>
  );
}
