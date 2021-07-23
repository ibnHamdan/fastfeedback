import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

function Feedback({ author, text, createdAt }) {
  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Heading size="sm" as="h3" mb={0} color="gray.600">
        {author}
      </Heading>
      <Text size="sm" color="gray.400">
        {format(parseISO(createdAt), "PPpp")}
      </Text>
      {text}
      <Divider></Divider>
    </Box>
  );
}

export default Feedback;
