import React from "react";
import { Box, Center, Image, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <Center>
      <Flex flexDirection="column" alignItems="center" mt="4rem">
        <Box mb="4" ml="13rem">
         <Link to="/reg">
         <Text fontSize="16px" color="#9FB2FF">
            Skip
          </Text>
         </Link>
        </Box>
        <Box w="375px" h="auto" bgColor="white" p="4" borderRadius="md">
          <Image src="image.png" alt="Your Image" />
          <Box textAlign="left">
            <Text fontWeight="bold" fontSize="20px" mt="4">
              Track Your Goal
            </Text>
            <Text color="#787878" mt="2">
              Don’t worry if you have trouble determining your goals. We can
              help you determine and track them.
            </Text>
          </Box>
        </Box>
       <Link to="/next">
       <Flex
      justifyContent="center"
      alignItems="center"
      width="60px"
      height="60px"
      borderRadius="50%"
      bg="#89A1FF"
      ml="14rem"
      mt="2rem"
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
