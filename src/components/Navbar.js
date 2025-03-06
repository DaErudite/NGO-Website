import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Button,
  useDisclosure,
  Stack,
  Collapse,
  Link as ChakraLink,
 
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onToggle,} = useDisclosure();
  const location = useLocation();

  const Links = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
    { name: 'Volunteer', to: '/volunteer' }
  ];

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <ChakraLink
        as={Link}
        to={to}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: 'brand.600',
        }}
        bg={isActive ? 'brand.600' : 'transparent'}
        color="white"
      >
        {children}
      </ChakraLink>
    );
  };

  return (
    <Box bg="brand.500" px={4} position="sticky" top={0} zIndex={1000}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Box>
            <Flex justifyContent='flex-start'>
        <Image src="./logo.png"  alt="logo" boxSize='50px'  objectFit="cover"  />
        <ChakraLink
          as={Link}
          to="/"
          fontSize="3xl"
          fontWeight="bold"
          color="white"
          _hover={{ textDecoration: 'none' }}
        >
          NOVAREACH
        </ChakraLink>
        </Flex>
        </Box>

        {/* Desktop Navigation */}
        <HStack spacing={8} alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
          <HStack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} to={link.to}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
          <Button
            bg="accent.400"
            color="brand.900"
            _hover={{ bg: 'accent.500' }}
            size="sm"
          >
            Donate
          </Button>
        </HStack>

        {/* Mobile Navigation Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant={'ghost'}
          color="white"
          aria-label={'Toggle Navigation'}
          _hover={{ bg: 'brand.600' }}
        />
      </Flex>

      {/* Mobile Navigation Drawer */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          pb={4}
          display={{ base: 'block', md: 'none' }}
          bg="brand.500"
        >
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} to={link.to}>
                {link.name}
              </NavLink>
            ))}
            <Button
              bg="accent.400"
              color="brand.900"
              _hover={{ bg: 'accent.500' }}
              size="sm"
              width="100%"
            >
              Donate
            </Button>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;