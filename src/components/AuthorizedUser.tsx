import { gql, useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ROOT_QUERY } from "../App";

const GITHUB_AUTH_MUTATION = gql`
  mutation githubAuth($code: String!) {
    githubAuth(code: $code) {
      token
    }
  }
`;

export const AuthorizedUser: React.FC = () => {
  const navigate = useNavigate();
  const [signingIn, setSigningIn] = useState(false);
  const { refetch } = useQuery(ROOT_QUERY);
  const [requestGithubAuth] = useMutation(GITHUB_AUTH_MUTATION);

  useEffect(() => {
    if (window.location.search.match(/code=/)) {
      setSigningIn(true);
      const code = window.location.search.replace("?code=", "");
      requestGithubAuth({ variables: { code } }).then((result) => {
        const token = result.data.githubAuth.token;
        localStorage.setItem("token", token);
        navigate("/", { replace: true });
        refetch();
        setSigningIn(false);
      });
    }
  }, []);

  const requestCode = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID || "";
    window.location.href = "https://github.com/login/oauth/authorize?client_id=" + clientId + "&scope=user";
  };

  return (
    <button onClick={requestCode} disabled={signingIn}>
      Sign In with GitHub
    </button>
  );
};

export default AuthorizedUser;
