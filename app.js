'use strict'
const express = require('express')
require('dotenv').config()
const app = express();
const path = require("path");


app.use(express.static(path.join(__dirname, process.env.REACT_LOCATION)));
const portNum = process.env.PORT || 8001;
const spotApiPass = process.env.SAPI

const postList = [
    {
        title: "My First Blog Post",
        href: "my-first-blog-post"
    }
]

app.get('/api/blog-post-list', function (req, res) {
    res.json(postList);
});

app.get('/api/posts/*', function (req, res) {
    let urlArray = req.url.split("/");
    let url = urlArray[urlArray.length - 1];
    for(let item in postList){
        if (postList[item]['href'] === url)
        {
            return res.sendFile(path.join(__dirname, 'blog_posts', url + '.md'));
        }
    }
    res.status(404).send('# Sorry, Couldn\'t find that post');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, process.env.REACT_LOCATION, '/index.html'));
});

app.listen(portNum, () => {
    console.log(`Running on http://localhost:${portNum}`)
});

