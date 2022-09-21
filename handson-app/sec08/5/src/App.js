import {useState} from "react";
import {GitHubUser} from "./GitHubUser";
import {RepositoryReadme} from "./RepositoryReadme";
import {SearchForm} from "./SearchForm";
import {UserRepositories} from "./UserRepositories";

export default function App() {
    const [login, setLogin] = useState();
    const [repo, setRepo] = useState();

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
