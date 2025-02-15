import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  Button,
  Heading,
  VStack,
  HStack,
  Icon,
  Link,
  FormControl,
} from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <Box bg="brand.900" color="white" mt="auto">
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          {/* Organization Info */}
          <VStack align="start" spacing={3}>
            <Heading size="md">NOVAREACH</Heading>
            <Text>Making a difference in communities worldwide</Text>
            <HStack spacing={4}>
              <Link href="#" isExternal><Icon as={FaTwitter} w={5} h={5} /></Link>
              <Link href="#" isExternal><Icon as={FaFacebook} w={5} h={5} /></Link>
              <Link href="#" isExternal><Icon as={FaInstagram} w={5} h={5} /></Link>
              <Link href="#" isExternal><Icon as={FaLinkedin} w={5} h={5} /></Link>
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" spacing={3}>
            <Heading size="md">Quick Links</Heading>
            <Link as={RouterLink} to="/about">About Us</Link>
            <Link as={RouterLink} to="/projects">Our Projects</Link>
            <Link as={RouterLink} to="/blog">Blog</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
          </VStack>

          {/* Get Involved */}
          <VStack align="start" spacing={3}>
            <Heading size="md">Get Involved</Heading>
            <Link href="/volunteer">Volunteer</Link>
            <Link href="#">Donate</Link>
            <Link href="/contact">Partner With Us</Link>
            <Link href="#">Careers</Link>
          </VStack>

          {/* Newsletter */}
          <VStack align="start" spacing={3}>
            <Heading size="md">Stay Updated</Heading>
            <Text>Subscribe to our newsletter</Text>
            <form onSubmit={handleSubscribe} style={{ width: '100%' }}>
              <Stack spacing={3}>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    bg="whiteAlpha.100"
                    border={0}
                    _focus={{
                      bg: 'whiteAlpha.300',
                    }}
                  />
                </FormControl>
                <Button type="submit" bg="accent.400" color="brand.900" width="full">
                  Subscribe
                </Button>
              </Stack>
            </form>
          </VStack>
        </SimpleGrid>

        {/* Bottom Bar */}
        <Box borderTopWidth={1} borderColor="gray.700" pt={8} mt={8}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Text>&copy; {new Date().getFullYear()} NOVAREACH Initiative. All rights reserved.</Text>
            <HStack spacing={4} justify={{ base: 'flex-start', md: 'flex-end' }}>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </HStack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;