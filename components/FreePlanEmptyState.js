import React from "react";
import NextLink from "next/link";
import { Box, Button, Heading } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import DashboardShell from "./DashboardShell";
//import Footer from "./Footer";

const FreePlanEmptyState = ({ children }) => {
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
      <Heading size="md">Get feedbac</Heading>
      <Text>Start today</Text>
      <Button>Upgarde</Button>
    </Box>
  </DashboardShell>;
};

export default FreePlanEmptyState;
