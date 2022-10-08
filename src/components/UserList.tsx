import UserListItem from "./UserListItem";

type Props = {
  users: {
    name: string;
    avatar: string;
  }[];
  count: number;
  refetchUsers: () => void;
};

export const UserList: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={() => props.refetchUsers()}>refetchUsers</button>
      <ul>
        {props.users.map((user) => (
          <UserListItem key={user.name} name={user.name} avatar={user.avatar} />
        ))}
      </ul>
    </div>
  );
};
