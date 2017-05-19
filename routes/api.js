const express = require('express');
const router = express.Router();

const fs = require('fs');

// declare axios for making http requests
// const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';



/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
    res.status(200).json(JSON.parse(fs.readFileSync('./posts.json', 'utf8')));

    // axios.get(`${API}/posts`)
    //     .then(posts => {
    //         res.status(200).json(posts.data);
    //     }).catch(error => {
    //         res.status(500).send(error);
    //     });
});

module.exports = router;