import React from "react";
import { Center, Box, Flex, FormControl, Input, Button, Text, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Center>
      <Box w="400px" p="4" borderRadius="lg" mt="2rem">
        <Text textAlign="left" fontSize="20px" fontWeight="600" mb="2rem">Create an account</Text>
        <form>
          <FormControl id="firstName" isRequired>
            <Input type="text" placeholder="First Name" fontSize="12px" bg="#F1F1F1" border="0" py="18px" />
          </FormControl>
          <FormControl id="lastName" isRequired mt="4">
            <Input type="text" placeholder="Last Name" fontSize="12px" bg="#F1F1F1" border="0" py="18px" />
          </FormControl>
          <FormControl id="email" isRequired mt="4">
            <Input type="email" placeholder="Email" fontSize="12px" bg="#F1F1F1" border="0" py="18px" />
          </FormControl>
          <FormControl id="password" isRequired mt="4">
            <Input type="password" placeholder="Password" fontSize="12px" bg="#F1F1F1" border="0" py="18px" />
          </FormControl>
          <Flex justify="flex-end" mt="12rem">
            <Button bg="linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)" color="white" fontSize="16px" w="100%">Create an Account</Button>
          </Flex>
        </form>
        <Flex alignItems="center" justifyContent="center" mt="2rem">
          <Divider />
          <Text mx="1rem">or</Text>
          <Divider />
        </Flex>
        <Flex alignItems="center" justifyContent="center" flexDirection="row" mt="1rem">
          <Box w="44px" h="44px" boxShadow="md" borderRadius="8px" border="1px  #7F7F7F">
            G
          </Box>
          <Box w="44px" h="44px" boxShadow="md" borderRadius="8px" border="1px  #7F7F7F">
            G
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="center" flexDirection="row" mt="1rem">
          <Box>
            <Text fontSize="12px" fontWeight="500">Already have an account? <Link>Login</Link></Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
