// src/routes/chat/[caseId].tsx
import { useParams } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

export default function CasePage() {
  const { caseId } = useParams();

  return (
    <Box p={10}>
      <Heading>Case Simulation: {caseId}</Heading>
      {/* Fetch + render case content here */}
    </Box>
  );
}
