import { gql } from "@apollo/client";
import { Users } from "./components/Users";
import { BrowserRouter } from "react-router-dom";
import AuthorizedUser from "./components/AuthorizedUser";
import { Me } from "./components/Me";

export const ROOT_QUERY = gql`
  fragment userInfo on User {
    githubLogin
    name
    avatar
  }
  query allUsers {
    totalUsers
    allUsers {
      ...userInfo
    }
    me {
      ...userInfo
    }
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Me />
      <Users />
    </BrowserRouter>
  );
}

export default App;
