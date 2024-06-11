import { Box, Container, Flex, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaAd } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("background", "gray.800");

  return (
    <Container maxW="container.xl" p={4} bg={bgColor}>
      <Flex direction="column" align="center" mb={8}>
        <Heading as="h1" size="2xl" mb={4}>
          Financial Times
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Your trusted source for financial news and analysis
        </Text>
      </Flex>
      <Flex>
        <Box flex="3" p={4}>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg" mb={2}>
                Article 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg" mb={2}>
                Article 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} ml={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px" display="flex" alignItems="center">
              <FaAd size="24px" />
              <Text ml={2}>Advertisement 1</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" display="flex" alignItems="center">
              <FaAd size="24px" />
              <Text ml={2}>Advertisement 2</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;