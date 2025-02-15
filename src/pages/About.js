import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
} from '@chakra-ui/react';

const About = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Box textAlign="center">
          <Heading mb={4}>About Our Organization</Heading>
          <Text fontSize="xl">
            Dedicated to making positive change in communities worldwide since 2010
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Image
              src="./christina-wocintechchat-com-c6wbSBaYxkY-unsplash.jpg"
              alt="Team at work"
              borderRadius="lg"
            />
          </Box>
          <VStack align="start" spacing={4}>
            <Heading size="lg">Our Story</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </VStack>
        </SimpleGrid>

        <StatGroup width="full">
          <Stat textAlign="center">
            <StatLabel>Communities Served</StatLabel>
            <StatNumber>50+</StatNumber>
          </Stat>
          <Stat textAlign="center">
            <StatLabel>Volunteers</StatLabel>
            <StatNumber>1,000+</StatNumber>
          </Stat>
          <Stat textAlign="center">
            <StatLabel>Projects Completed</StatLabel>
            <StatNumber>200+</StatNumber>
          </Stat>
        </StatGroup>
      </VStack>
    </Container>
  );
};

export default About;
