import { gql, useMutation } from "@apollo/client";
import { ROOT_QUERY } from "../App";
import UserListItem from "./UserListItem";

type Props = {
  users: {
    name: string;
    avatar: string;
  }[];
  count: number;
  refetchUsers: () => void;
};

const ADD_FAKE_USERS_MUTATION = gql`
  mutation addFakeUsers($count: Int!) {
    addFakeUsers(count: $count) {
      githubLogin
      name
      avatar
    }
  }
`;

export const UserList: React.FC<Props> = (props) => {
  const [addFakeUsers] = useMutation(ADD_FAKE_USERS_MUTATION, {
    variables: { count: 1 },
    refetchQueries: [{ query: ROOT_QUERY }],
  });

  return (
    <div>
      <p>{props.count}</p>
      <button onClick={() => props.refetchUsers()}>refetchUsers</button>
      <button onClick={() => addFakeUsers()}>addFakeUsers</button>
      <ul>
        {props.users.map((user) => (
          <UserListItem key={user.name} name={user.name} avatar={user.avatar} />
        ))}
      </ul>
    </div>
  );
};
