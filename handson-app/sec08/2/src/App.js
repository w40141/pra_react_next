import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const GitHubUser = (login) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((r) => r.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return null;
};

export default function App() {
  return <GitHubUser login="w40141" />;
}
