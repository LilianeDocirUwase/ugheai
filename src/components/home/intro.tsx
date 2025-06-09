// src/pages/home.tsx
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <Box p={10} textAlign="center">
      <Heading size="2xl">Welcome to UGHE AI Tutoring</Heading>
      <Text mt={4} fontSize="lg">AI-driven medical education, personalized for you.</Text>
      <Button as={Link} to="/chat" colorPalette="teal" size="lg" mt={6}>
        Try a Case
      </Button>
    </Box>
  );
}
