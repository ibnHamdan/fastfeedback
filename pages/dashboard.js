import Head from "next/head";
import { Button, Heading, Code, Text, Icon, Box, Flex } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import DashboardShell from "@/components/DashboardShell";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import SiteTable from "../components/SiteTable";

function Dashboard() {
  const auth = useAuth();
  const { data, error } = useSWR("/api/sites", fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return <DashboardShell>{data.sites.length ? <SiteTable sites={data.sites} /> : <EmptyState />}</DashboardShell>;
}

export default Dashboard;
