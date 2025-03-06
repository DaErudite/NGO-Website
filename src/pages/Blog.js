import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  VStack,
  HStack,
  Tag,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const BlogPost = ({ title, date, category, excerpt, image, author }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Box
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-4px)' }}
    >
      <Image
        src={image}
        alt={title}
        height="200px"
        width="100%"
        objectFit="cover"
      />
      <VStack align="start" p={6} spacing={3}>
        <HStack>
          <Tag colorScheme="green">{category}</Tag>
          <Text color="gray.500" fontSize="sm">{date}</Text>
        </HStack>
        <Heading size="md">{title}</Heading>
        <Text noOfLines={3}>{excerpt}</Text>
        <HStack justify="space-between" width="100%">
          <Text fontSize="sm" color="gray.500">By {author}</Text>
          <Button variant="link" colorScheme="green">
            Read More →
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

const Blog = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      title: "Transforming Communities Through Education",
      date: "Feb 12, 2025",
      category: "Education",
      excerpt: "Discover how our education initiatives are creating lasting impact in rural communities...",
      image: "./istockphoto-1353379172-612x612.jpg",
      author: "Sarah Johnson"
    },
    {
      title: "Clean Water Project Success Story",
      date: "Feb 10, 2025",
      category: "Infrastructure",
      excerpt: "Learn about our recent successful implementation of water purification systems...",
      image: "./water.jpg",
      author: "Michael Chen"
    },
    {
      title: "Volunteer Spotlight: Making a Difference",
      date: "Feb 8, 2025",
      category: "Community",
      excerpt: "Meet our dedicated volunteers and hear their inspiring stories of service...",
      image: "./product-5d52a6ffeac4e.[1600].jpeg",
      author: "Emma Williams"
    }
  ];

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading textAlign="center">Our Blog</Heading>
        
        {/* Search and Filter */}
        <HStack spacing={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
          <Select
            width="200px"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="education">Education</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="community">Community</option>
          </Select>
        </HStack>

        {/* Blog Posts Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </SimpleGrid>

        {/* Pagination */}
        <HStack justify="center" spacing={2}>
          <Button variant="outline">Previous</Button>
          <Button colorScheme="green">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Blog;