import {useState} from "react";
import {GitHubUser} from "./GitHubUser";
import {SearchForm} from "./SearchForm";

export default function App() {
  const [login, setLogin] = useState("moonhighway");
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
    </>
  );
}
