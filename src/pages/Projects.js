import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  Image,
  Button,
  VStack,

} from '@chakra-ui/react';

const ProjectCard = ({ title, category, description, image }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={image} alt={title} height="200px" width="100%" objectFit="cover" />
    <Box p={6}>
      <Badge colorScheme="green" mb={2}>{category}</Badge>
      <Heading size="md" mb={2}>{title}</Heading>
      <Text mb={4}>{description}</Text>
      <Button colorScheme="green">Learn More</Button>
    </Box>
  </Box>
);

let projects = [
    {
      title: "Clean Water Initiative",
      category: "Infrastructure",
      description: "Providing clean water access to remote communities...",
      image: "./annie-spratt-0cgpyigyIkM-unsplash.jpg"
    },
    {
      title: "Education for All",
      category: "Education",
      description: "Building schools and supporting education programs...",
      image: "./annie-spratt-yUZU943bPf4-unsplash.jpg"
    },
    {
      title: "Healthcare Outreach",
      category: "Healthcare",
      description: "Mobile medical clinics for underserved areas...",
      image: "./istockphoto-1192658825-612x612.jpg"
    }
  ];


const Projects = () => {
  
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading mb={4}>Our Projects</Heading>
          <Text fontSize="xl">Making a difference through sustainable initiatives</Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};


export default Projects;
