import { Fetch } from "./Fetch";
import { UserDetails } from "./UserDetails";

export const GitHubUser = ({ login }) => (
  <Fetch
    uri={`https://api.github.com/users/${login}`}
    renderSuccess={UserDetails}
  />
);
