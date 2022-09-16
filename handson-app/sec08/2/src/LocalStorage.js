import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import {Fetch} from "./Fetch"

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const LocalStorage = ({ login }) => {
  // const [data, setData] = useState();
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);
  //
  // useEffect(() => {
  //   if (!data) return;
  //   const { name, avatar_url, location } = data;
  //   saveJSON(`user:${login}`, {
  //     name,
  //     login,
  //     avatar_url,
  //     location,
  //   });
  // }, [data]);
  //
  // useEffect(() => {
  //   if (!login) return;
  //   setLoading(true);
  //   // if (data && data.login === login) return;
  //   fetch(`https://api.github.com/users/${login}`)
  //     .then((response) => response.json())
  //     .then(setData)
  //     .then(() => setLoading(false))
  //     .catch(setError);
  // }, [login]);
  // const { loading, data, error } = useFetch(
  //   `https://api.github.com/users/${login}`
  // );
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );

  // if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // if (loading) return <h1>loading...</h1>;
  // if (!data) return null;
};

const UserDetails = ({ data }) => (
  <div className="githubUser">
    <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
    <div>
      <h1>{data.login}</h1>
      {data.name && <p>{data.name}</p>}
      {data.location && <p>{data.location}</p>}
    </div>
  </div>
);

export { LocalStorage };
