import React from 'react';
import { Box, Flex, Link as ChakraLink, Button,Image, Stack, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="green.500" px={4}>
      <Flex h={16} justifyContent='space-between' >  
        <Box>
            <Flex justifyContent='flex-start'>
        <Image src="./logo.png"  alt="logo" boxSize='50px'  objectFit="cover"  />
        <ChakraLink as={Link} to="/" fontSize="4xl" fontWeight="bold" color="accent.400" >
        

          NOVAREACH
        </ChakraLink>
        </Flex>
        </Box>


        <Box display={{ base: 'block', md: 'none' }} align='right'>
          <Button onClick={onToggle} variant="ghost" color="white">
            <HamburgerIcon />
          </Button>
        </Box>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="right"
          spacing={6}
          justify='flex-end'
          align='right'
        >
          <ChakraLink as={Link} to="/" color="white">Home</ChakraLink>
          <ChakraLink as={Link} to="/about" color="white">About</ChakraLink>
          <ChakraLink as={Link} to="/projects" color="white">Projects</ChakraLink>
          <ChakraLink as={Link} to="/blog" color="white">Blog</ChakraLink>
          <ChakraLink as={Link} to="/contact" color="white">Contact</ChakraLink>
          <ChakraLink as={Link} to="/volunteer" color="white">Volunteer</ChakraLink>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
