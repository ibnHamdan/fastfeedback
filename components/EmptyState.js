import { Box, Button, Heading, Text } from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";

const EmptyState = ({ children }) => {
  return (
    <Box width="100%" justify="center" align="center" direction="coulumn" backgroundColor="white" borderRadius="8px" p={8}>
      <Heading size="md" mb={2}>
        Get feedbac
      </Heading>
      <Text mb={4}>Start today</Text>
      <AddSiteModal />
    </Box>
  );
};

export default EmptyState;
