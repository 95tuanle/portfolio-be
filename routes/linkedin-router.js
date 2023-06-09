'use strict';
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const linkedinResponse = await axios.get('https://api.linkedin.com/v2/me', {
            headers: {
                'Authorization': `Bearer ${process.env.LINKEDIN_TOKEN}`
            }
        });
        res.json(linkedinResponse.data);
    } catch (error) {
        res.sendStatus(500);
    }
});

module.exports = router;
