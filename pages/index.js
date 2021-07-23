import Head from "next/head";
import { Button, Heading, Code, Text, Icon, Box, Flex } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";

export default function Home() {
  const auth = useAuth();
  return (
    <Flex as="main" direction="column" align="center" justify="center" h="100vh">
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <ChatIcon boxSize={44} />

      {auth.user ? (
        <EmptyState />
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
