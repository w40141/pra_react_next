import React from "react";
import { Fetch } from "./Fetch";

const LocalStorage = ({ login }) => {
  return (
    <>
      <p>{login}</p>
      <Fetch
        uri={`https://api.github.com/users/${login}`}
        renderSuccess={UserDetails}
      />
    </>
  );
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
