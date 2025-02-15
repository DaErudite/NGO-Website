import React from 'react';
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  SimpleGrid,
  Box,
  Text,
  Icon,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, InfoIcon } from '@chakra-ui/icons';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <Container maxW="container.xl" py={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <VStack spacing={8} align="start">
          <Box>
            <Heading mb={4}>Get in Touch</Heading>
            <Text>We'd love to hear from you. Send us a message!</Text>
          </Box>

          <VStack spacing={4} width="100%">
            <Box>
              <Icon as={PhoneIcon} mr={2} />
              <Text display="inline">+1 (555) 123-4567</Text>
            </Box>
            <Box>
              <Icon as={EmailIcon} mr={2} />
              <Text display="inline">novareachinitiative@gmail.com</Text>
            </Box>
            <Box>
              <Icon as={InfoIcon} mr={2} />
              <Text display="inline">123 , City, Country</Text>
            </Box>
          </VStack>
        </VStack>

        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Your name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="your@email.com" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your message" rows={6} />
            </FormControl>

            <Button type="submit" colorScheme="green" width="100%">
              Send Message
            </Button>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Contact;