require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const githubData = {
    "login": "Suraj5260",
    "id": 94602236,
    "node_id": "U_kgDOBaOD_A",
    "avatar_url": "https://avatars.githubusercontent.com/u/94602236?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Suraj5260",
    "html_url": "https://github.com/Suraj5260",
    "followers_url": "https://api.github.com/users/Suraj5260/followers",
    "following_url": "https://api.github.com/users/Suraj5260/following{/other_user}",
    "gists_url": "https://api.github.com/users/Suraj5260/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Suraj5260/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Suraj5260/subscriptions",
    "organizations_url": "https://api.github.com/users/Suraj5260/orgs",
    "repos_url": "https://api.github.com/users/Suraj5260/repos",
    "events_url": "https://api.github.com/users/Suraj5260/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Suraj5260/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Suraj K Telrandhe",
    "company": null,
    "blog": "https://suraj5260.netlify.app/",
    "location": "Chandrapur, Maharashtra, India",
    "email": null,
    "hireable": null,
    "bio": "Developer by day and gamer by night.🦇",
    "twitter_username": null,
    "public_repos": 24,
    "public_gists": 0,
    "followers": 2,
    "following": 7,
    "created_at": "2021-11-18T08:30:57Z",
    "updated_at": "2024-04-09T06:58:54Z"
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Suraj5260")
})

app.get('/login', (req, res) => {
    res.send('<h1>Pls login on our website</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>chai aur code</h2>')
})

app.get("/github", (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})