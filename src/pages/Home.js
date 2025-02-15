import React from 'react';

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  Image,
  Icon,
  Stack,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
} from '@chakra-ui/react';

import { FaHandHoldingHeart, FaGlobe, FaPeopleCarry } from 'react-icons/fa';


var request = async()=> {
    const projects=await fetch('./projects.json')
    .then((response)=> response.json())
    return projects
}    
var projects = await request('PromiseResult');
//const address = projects.address
//console.log(address)


console.log(projects);

//const jsonFiles = '.../projects.json'
//const projects = JSON.parse(jsonFiles);


const Feature = ({ icon, title, text }) => {
  return (
    <VStack
      bg={useColorModeValue('white', 'gray.800')}
      p={6}
      borderRadius="lg"
      boxShadow="xl"
      align="start"
      spacing={4}
    >
      <Icon as={icon} w={10} h={10} color="brand.500" />
      <Heading size="md">{title}</Heading>
      <Text color={useColorModeValue('gray.600', 'gray.400')}>{text}</Text>
    </VStack>
  );
};

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bg="brand.500"
        color="white"
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={6}>
              <Heading size="2xl">
                Making a Difference in Communities Worldwide
              </Heading>
              <Text fontSize="xl" color='black'>
                Join us in our mission to create positive change and empower communities
                through sustainable development and education.
              </Text>
              <HStack spacing={4}>
                <Button size="lg" bg="accent.400" color="brand.900" _hover={{bg: 'accent.500'}}>
                  Get Involved
                </Button>
                <Button size="lg" variant="outline" borderColor="white" _hover={{ bg: 'whiteAlpha.200' }}>
                  Learn More
                </Button>
              </HStack>
            </VStack>
            <Box>
              <Image
                src="./product-5d52a6ffeac4e.[1600].jpeg"
                alt="Hero Image"
                borderRadius="lg"
                objectFit="cover"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxW="container.xl" py={16}>
        <StatGroup>
          <Stat textAlign="center">
            <StatNumber fontSize="4xl" fontWeight="bold" color="brand.500">
              10K+
            </StatNumber>
            <StatLabel fontSize="lg">Lives Impacted</StatLabel>
          </Stat>
          <Stat textAlign="center">
            <StatNumber fontSize="4xl" fontWeight="bold" color="brand.500">
              50+
            </StatNumber>
            <StatLabel fontSize="lg">Communities Served</StatLabel>
          </Stat>
          <Stat textAlign="center">
            <StatNumber fontSize="4xl" fontWeight="bold" color="brand.500">
              100+
            </StatNumber>
            <StatLabel fontSize="lg">Active Projects</StatLabel>
          </Stat>
        </StatGroup>
      </Container>

      {/* Features Section */}
      <Box bg="green.50" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading textAlign="center">Our Impact Areas</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature
                icon={FaHandHoldingHeart}
                title="Community Support"
                text="Providing resources and support to build stronger, more resilient communities."
              />
              <Feature
                icon={FaGlobe}
                title="Global Reach"
                text="Operating in multiple countries to create lasting positive change worldwide."
              />
              <Feature
                icon={FaPeopleCarry}
                title="Volunteer Network"
                text="Connecting passionate volunteers with meaningful opportunities to help."
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Latest Projects Section */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12}>
          <Heading textAlign="center">Latest Projects</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {projects.map((project) => (
              <Box
                key={project.id}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="xl"
              >
                <Image
                  src= {project.image}
                  alt={project.title} height="200px" width="100%"
                />
                <Box p={6}>
                  <Heading size="md" mb={2}>
                    {project.title}
                  </Heading>
                  <Text mb={4}>
                   {project.description}
                  </Text>
                  <Button variant="outline" colorScheme="brand">
                    Learn More
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Call to Action */}
      <Box bg="brand.500" color="white" py={16}>
        <Container maxW="container.xl" textAlign="center">
          <VStack spacing={6}>
            <Heading>Ready to Make a Difference?</Heading>
            <Text fontSize="xl">
              Join our community of changemakers and help us create positive impact.
            </Text>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              justify="center"
            >
              <Button size="lg" bg="accent.400" color="brand.900" _hover={{ bg: 'accent.500' }}>
                Donate Now
              </Button>
              <Button size="lg" variant="outline" borderColor="white" _hover={{ bg: 'whiteAlpha.200' }}>
                Become a Volunteer
              </Button>
            </Stack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
