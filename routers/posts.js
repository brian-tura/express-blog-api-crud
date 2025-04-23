const express = require('express');
const router = express.Router();
const posts = require('../postsList.js');


router.get('/', (req, res) => {
    res.send(posts);
});

router.get('/:id', (req, res) => {
    res.send(posts[req.params.id - 1]);
});

router.post('/', (req, res) => {
    res.send('Creazione nuovo post');
});

router.put('/:id', (req, res) => {
    res.send(`Modifica integrale del post ${req.params.id}`);
});

router.patch('/:id', (req, res) => {
    res.send(`Modifica parziale del post ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Eliminazione del post ${req.params.id}`);
});

module.exports = router;