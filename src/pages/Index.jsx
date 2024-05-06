import React from "react";
import { Box, Container, Heading, Text, VStack, Button, Image, Link, useColorModeValue } from "@chakra-ui/react";
import { FaRocket, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.50");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" bg={bgColor} color={textColor}>
          <Heading fontSize="xl">Welcome to 3broz SEO</Heading>
          <Text mt={4}>Boost your business with our expert SEO services and get your website ranked at the top!</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" bg={bgColor} color={textColor}>
          <Heading fontSize="xl">Our Services</Heading>
          <Text mt={4}>We offer comprehensive SEO solutions, including keyword research, on-page optimization, backlinking, and more.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" bg={bgColor} color={textColor}>
          <Heading fontSize="xl">Contact Us</Heading>
          <VStack align="start" mt={4}>
            <Button leftIcon={<FaPhone />} colorScheme="teal" variant="solid">
              +1234567890
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
              contact@3brozseo.com
            </Button>
          </VStack>
        </Box>

        <Box align="center">
          <Image src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTRU8lMjB0b29sc3xlbnwwfHx8fDE3MTQ5ODE0OTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="SEO Tools" boxSize="300px" objectFit="cover" />
        </Box>

        <Box align="center">
          <Link href="https://www.3brozseo.com" isExternal>
            <Button rightIcon={<FaRocket />} colorScheme="purple" variant="outline">
              Visit Our Website
            </Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
