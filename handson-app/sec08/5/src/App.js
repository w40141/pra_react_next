import {useEffect, useState} from "react";
import {GitHubUser} from "./GitHubUser";
import {RepositoryReadme} from "./RepositoryReadme";
import {SearchForm} from "./SearchForm";
import {UserRepositories} from "./UserRepositories";
// import {GraphQLClient} from "graph-request";

// const query = `
//     query findRepos($login:String!) {
//         user(login:$login) {
//             login
//             name
//             location
//             avatar_url: avatarUrl
//             repositories(first:100) {
//                 totalCount
//                 nodes {
//                     name
//                 }
//             }
//         }
//     }
// `;
//
// const client = new GraphQLClient("https://api.github.com/graphql", {
//     headers: {
//         Authorization: `Bearer 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`
//     }
// });

export default function App() {
    const [login, setLogin] = useState();
    const [repo, setRepo] = useState();
    // const [userDate, setUserDate] = useState();
    //
    // useEffect(() => {
    //     client.request(query, {login}).then(({user}) => user).then(setUserDate)
    //         .catch(console.error)
    // }, [client, query, login])

    const handleSearch = login => {
        if (login) return setLogin(login);
        setLogin("");
        setRepo("");
    };

    if (!login) return (<SearchForm value={login} onSearch={handleSearch} />)

    return (
        <>
            <SearchForm value={login} onSearch={handleSearch} />
            <GitHubUser login={login} />
            <UserRepositories login={login} selectedRepo={repo} onSelect={setRepo} />
            <RepositoryReadme login={login} repo={repo} />
        </>
    );
}
