'use strict';
const {request} = require("../octokit");

exports.getCurrentGitHubUser = () => {
    return new Promise((resolve, reject) => {
        request('GET /user').then(result => {
            resolve(result.data);
        }).catch(error => {
            reject(error);
        });
    });
}

exports.getGitHubReposBasedOnCurrentUser = () => {
    return new Promise((resolve, reject) => {
        request('GET /user/repos', {
            affiliation: 'owner',
            sort: 'updated',
            per_page: 333
        }).then(result => {
            resolve(result.data);
        }).catch(error => {
            reject(error);
        });
    });
}