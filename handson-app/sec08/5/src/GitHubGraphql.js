import {GraphQLClient} from "graph-request";

const query = `
    query findRepos($login:String!) {
        user(login:$login) {
            login
            name
            location
            avatar_url: avatarUrl
            repositories(first:100) {
                totalCount
                nodes {
                    name
                }
            }
        }
    }
`;

const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
        Authorization: `Bearer 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`
    }
});

client.request(query, {login: "moontahoe"})
    .then(results => JSON.stringify(results, null, 2))
    .then(console.log)
    .catch(console.error)
