'use strict';
const express = require('express');
const {request} = require("../octokit");
const router = express.Router();

router.get('/', async (req, res) => {
    const {data} = await request('GET /users/{username}/repos', {
        username: process.env.GITHUB_USERNAME
    });
    res.json(data);
});

module.exports = router;