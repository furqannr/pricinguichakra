import { Box, Button, Heading, HStack, Text, Icon } from "@chakra-ui/react";
import React from "react";
import check from "./icons/check";

export default function Pricing() {
  return (
    <Box
    borderRadius={'15px'}
    overflow={'hidden'}
   
      display={"flex"}
      mx={'auto'}
      mt={'-135px'}
      justifyContent={"center"}
      alignContent={"center"}
      maxH={"270px"}
      maxW={'800px'}
    >
      {/* Price box*/ }
      <Box bgColor={"#ad9ec9"} p={'60px'} textAlign={'center'} maxW={'300px'}>
        <Text fontWeight={"bold"} fontSize={"24px"}>
          Premium PRO
        </Text>
        <Heading fontWeight={"bold"} fontSize="60px">
          $329
        </Heading>
        <Text p='10px'>Billed just once</Text>
        <Button bgColor={"#6B46C1"} color={"white"} w={'200px'}>
          Get Started
        </Button>
      </Box>
      {/* FeATURE box*/ }
      <Box bgColor={"White"} pt={"50px"} pl={"25px"} maxW={'700px'} >
        <Text>Access these features when you buy this pricing package</Text>
      <HStack p={'5px'} pt={'20px'}>
      <Icon as ={check}></Icon>
        <Text>International messaging and calling API</Text>
        </HStack>
        <HStack p={'5px'}>
        <Icon as ={check}></Icon>
      <Text >Additional phone numbers</Text>
      </HStack>
        <HStack p={'5px'}>
      <Icon as ={check}></Icon>
      <Text>Additional personal messages option</Text>
      </HStack>
        <HStack p={'5px'}>
      <Icon as ={check}></Icon>
      <Text>Secured environment keeping secrets</Text>
      </HStack>
      </Box>
    </Box>
  );
}
