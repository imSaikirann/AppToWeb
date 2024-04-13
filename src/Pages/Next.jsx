import React from "react";
import { Box, Center, Image, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Center>
      <Flex flexDirection="column" alignItems="center" mt="4rem">
        <Box mb="4" ml="13rem">
          <Text fontSize="16px" color="#9FB2FF">
            Skip
          </Text>
        </Box>
        <Box w="375px" h="auto" bgColor="white" p="4" borderRadius="md">
          <Image src="cycle.png" alt="Your Image" />
          <Box textAlign="left">
            <Text fontWeight="bold" fontSize="20px" mt="4">
            Get Burn
            </Text>
            <Text color="#787878" mt="2">
            Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
            </Text>
          </Box>
        </Box>
      <Link to='/reg'>
      <Flex
      justifyContent="center"
      alignItems="center"
      width="60px"
      height="60px"
      borderRadius="50%"
      bg="#89A1FF"
      ml="14rem"
      mt="5rem"
    >
      <Box
      
        textAlign="center"
        fontSize="24px"
        fontWeight="bold"
        color="white"
        mb="0.5rem"
      >
        &gt;
      </Box>
    </Flex>
      </Link>
      </Flex>
    </Center>
  );
}
