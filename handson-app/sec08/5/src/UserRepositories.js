import React from "react";
import {Fetch} from "./Fetch";
import {RepoMenu} from "./RepoMenu";

export const UserRepositories = ({login, repo, onSelect}) => (
    <Fetch
        uri={`https://api.github.com/users/${login}/repos`}
        renderSuccess={({data}) => (
            <RepoMenu repositories={data} selected={repo} onSelect={onSelect} />
        )}
    />
);
