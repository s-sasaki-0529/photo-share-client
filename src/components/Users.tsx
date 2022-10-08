import { useQuery, useMutation, gql } from "@apollo/client";
import { useEffect } from "react";
import { ROOT_QUERY } from "../App";
import { UserList } from "./UserList";

export const Users: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(ROOT_QUERY);

  if (loading) return <p>Loading users...</p>;

  return <UserList count={data.totalUsers} users={data.allUsers} refetchUsers={() => refetch()} />;
};
