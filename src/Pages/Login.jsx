import React from "react";
import { Center, Box, Flex, FormControl, Input, Button, Text, Divider } from "@chakra-ui/react";
import { AiOutlineLock } from "react-icons/ai"; // Import the lock icon
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import Google and Facebook icons
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center>
      <Box w="400px" p="4" borderRadius="lg" mt="2rem">
        <Text textAlign="left" fontSize="20px" fontFamily="sans-serif" fontWeight="600" mb="2rem">Welcome Back</Text>
        <form>
          <FormControl id="email" isRequired mt="4">
            <Input type="email" placeholder="Email" fontSize="12px" borderRadius="12px" bg="#F1F1F1" border="0" h="55px" />
          </FormControl>
          <FormControl id="password" isRequired mt="4" position="relative">
            <Flex align="center">
              <Input
                type="password"
                placeholder="Password"
                fontSize="12px"
                borderRadius="12px"
                bg="#F1F1F1"
                border="0"
                h="55px"
                pr="40px"
              />
              <Icon as={AiOutlineLock} color="black" position="absolute" right="10px" />
            </Flex>
          </FormControl>
          <Flex justify="flex-end" mt="14rem">
            <Button bg="linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)" color="white" fontSize="16px" w="100%">Sign In</Button>
          </Flex>
        </form>
        <Flex alignItems="center" justifyContent="center" mt="1rem">
          <Divider />
          <Text mx="1rem">or</Text>
          <Divider />
        </Flex>
        <Flex alignItems="center" justifyContent="center" flexDirection="row" mt="1rem">
          <Box w="44px" h="44px" boxShadow="md" borderRadius="8px" border="1px  #7F7F7F" display="flex" justifyContent="center" alignItems="center">
            <FaGoogle color="red" />
          </Box>
          <Box w="44px" h="44px" boxShadow="md" borderRadius="8px" border="1px  #7F7F7F" display="flex" justifyContent="center" alignItems="center">
            <FaFacebook color="blue" />
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="center" flexDirection="row" mt="1rem">
          <Box>
            <Text fontSize="12px" fontWeight="500">Don’t have an account yet? </Text>
          </Box> 
          <Box>
            <Link to='/reg'><Text fontSize="12px" fontWeight="500" color='#819CFF'>Create an account</Text></Link>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
