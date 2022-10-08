import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { ROOT_QUERY } from "../App";
import { UserList } from "./UserList";

export const Users: React.FC = () => {
  const { loading, error, data, refetch, startPolling, stopPolling } =
    useQuery(ROOT_QUERY);

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <UserList
      count={data.totalUsers}
      users={data.allUsers}
      refetchUsers={() => refetch()}
    />
  );
};
