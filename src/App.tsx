import { gql } from "@apollo/client";
import { Users } from "./components/Users";

export const ROOT_QUERY = gql`
  query allUsers {
    totalUsers
    allUsers {
      githubLogin
      name
      avatar
    }
  }
`;

function App() {
  return <Users />;
}

export default App;
