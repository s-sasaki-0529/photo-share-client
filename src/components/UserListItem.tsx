type Props = {
  name: string;
  avatar: string;
};

export const UserListItem: React.FC<Props> = (props) => {
  return (
    <li>
      <img src={props.avatar} width={48} height={48} alt="" />
      {props.name}
    </li>
  );
};

export default UserListItem;
