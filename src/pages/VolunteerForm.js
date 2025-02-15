import React from 'react';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Checkbox,
  Button,
  useToast
} from '@chakra-ui/react';

const VolunteerForm = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    toast({
      title: "Application Submitted",
      description: "We'll review your application and get back to you soon!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading mb={4}>Volunteer With Us</Heading>
          <Text fontSize="lg" color="gray.600">
            Join our community of changemakers and help make a difference
          </Text>
        </Box>

        <Box
          as="form"
          onSubmit={handleSubmit}
          bg="white"
          p={8}
          borderRadius="lg"
          boxShadow="lg"
        >
          <VStack spacing={6}>
            {/* Personal Information */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} width="100%">
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Enter your first name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Enter your last name" />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} width="100%">
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="your@email.com" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Phone</FormLabel>
                <Input type="tel" placeholder="Your phone number" />
              </FormControl>
            </SimpleGrid>

            {/* Volunteer Preferences */}
            <FormControl isRequired>
              <FormLabel>Areas of Interest</FormLabel>
              <Select placeholder="Select area of interest">
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="environment">Environment</option>
                <option value="community">Community Development</option>
                <option value="infrastructure">Infrastructure</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Availability</FormLabel>
              <Select placeholder="Select availability">
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="both">Both Weekdays and Weekends</option>
                <option value="flexible">Flexible</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Time Commitment</FormLabel>
              <Select placeholder="Select time commitment">
                <option value="few-hours">Few Hours Weekly</option>
                <option value="part-time">Part-Time (10-20 hours/week)</option>
                <option value="full-time">Full-Time (20+ hours/week)</option>
                <option value="project-based">Project-Based</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Skills & Experience</FormLabel>
              <Textarea
                placeholder="Tell us about your relevant skills and experience..."
                rows={4}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Why do you want to volunteer with us?</FormLabel>
              <Textarea
                placeholder="Share your motivation for volunteering..."
                rows={4}
              />
            </FormControl>

            {/* Agreement */}
            <FormControl isRequired>
              <Checkbox>
                I agree to the volunteer terms and conditions
              </Checkbox>
            </FormControl>

            <Button
              type="submit"
              bg="brand.700"
              size="lg"
              width="100%"
            >
              Submit Application
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default VolunteerForm;