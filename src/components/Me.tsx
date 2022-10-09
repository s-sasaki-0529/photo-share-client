import { useQuery } from "@apollo/client";
import { ROOT_QUERY } from "../App";
import AuthorizedUser from "./AuthorizedUser";

export const Me: React.FC<{}> = () => {
  const { loading, error, data, refetch } = useQuery(ROOT_QUERY);

  if (loading) return <p>Loading...</p>;
  if (!data.me) return <AuthorizedUser />;

  const { avatar, name } = data.me;

  const logout = () => {
    localStorage.removeItem("token");
    refetch();
  };

  return (
    <div>
      <img src={avatar} width={48} height={48} alt="" />
      <h1>{name}</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
};
