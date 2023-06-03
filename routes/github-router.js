'use strict';
const express = require('express');
const {getCurrentGitHubUser, getGitHubReposBasedOnCurrentUser} = require("../controllers/github-controller");
const router = express.Router();

router.get('/user', async (req, res) => {
    try {
        const user = await getCurrentGitHubUser();
        res.json(user);
    } catch (error) {
        res.sendStatus(500);
    }
});

router.get('/user/repos', async (req, res) => {
    try {
        const repositories = await getGitHubReposBasedOnCurrentUser();
        res.json(repositories);
    } catch (error) {
        res.sendStatus(500);
    }
});

module.exports = router;