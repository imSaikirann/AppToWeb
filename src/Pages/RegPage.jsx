import React from "react";
import { Center, Box, Flex, FormControl, Input, Button, Text, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import Google and Facebook icons

export default function Home() {
  return (
    <Center>
      <Box w="400px" p="4" borderRadius="lg" mt="2rem">
        <Text textAlign="left" fontSize="20px" fontFamily="sans-serif" fontWeight="600" mb="2rem">Create an account</Text>
        <form>
          <FormControl id="firstName" isRequired>
            <Input type="text" placeholder="First Name" fontSize="12px" borderRadius="12px" bg="#F1F1F1" border="0" h="55px" />
          </FormControl>
          <FormControl id="lastName" isRequired mt="4">
            <Input type="text" placeholder="Last Name" fontSize="12px" borderRadius="12px" bg="#F1F1F1" border="0" h="55px" />
          </FormControl>
          <FormControl id="email" isRequired mt="4">
            <Input type="email" placeholder="Email" fontSize="12px" borderRadius="12px" bg="#F1F1F1" border="0" h="55px" />
          </FormControl>
          <FormControl id="pass" isRequired mt="4">
            <Input type="password" placeholder="Password" fontSize="12px" borderRadius="12px" bg="#F1F1F1" border="0" h="55px"/>
          </FormControl>
          <Link to="/main">   <Flex justify="flex-end" mt="6rem">
            
            <Button  bg="linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)" color="white" fontSize="16px" w="100%">Create an Account</Button>
            
        
          </Flex> </Link>
        </form>
        <Flex alignItems="center" justifyContent="center" mt="2rem">
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
            <Text fontSize="12px" fontWeight="500">Already have an account?</Text>
          </Box>
          <Box>
            <Link to="/login"><Text fontSize="12px" fontWeight="500" color='#819CFF'>Login</Text></Link>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
