// src/routes/NotFound.tsx
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box textAlign="center" py={20}>
      <Heading>404</Heading>
      <Text fontSize="lg" mt={4}>
        Page not found.
      </Text>
      <Button as={Link} to="/home" colorPalette="teal">
        Go to Home
      </Button>
      <Button bg="ughe.yellow" color="white" _hover={{ bg: "ughe.main" }}>
        Chakra UGHE Button
      </Button>
    </Box>
  );
}
