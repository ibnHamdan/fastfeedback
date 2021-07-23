import React from "react";
import NextLink from "next/link";
import { Box, Button, Flex, Link, Avatar, Icon, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

import { useAuth } from "@/lib/auth";
import AddSiteModal from "./AddSiteModal";
//import Footer from "./Footer";

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" mb={[8, 16]} w="full" borderTop="5px solid #0AF5F4">
        <Flex alignItems="center" justifyContent="space-between" pt={4} pb={4} maxW="1250px" margin="0 auto" w="full" px={8} h="60px">
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link>
                <ChatIcon name="logo" size="24px" mr={8} />
              </Link>
            </NextLink>
            <NextLink href="/sites" passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <NextLink href="/account" passHref>
              <Link>
                <Avatar size="sm" src={auth?.user?.photoURL} />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="black">Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between">
          <Heading color="black">Sites</Heading>
          <AddSiteModal>+ Add Site</AddSiteModal>
        </Flex>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
