const posts = require('../data/postsList.js');

function index(req, res) {
    res.json(posts);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
        res.sendStatus(404);
    }
    res.json(post);
}

function store(req, res) {
    console.log(req.body);
    

    const newId = posts[posts.length - 1].id + 1;

    const newPost = {
        id: newId,
        name: req.body.name
    }

    posts.push(newPost);

    console.log(posts);

    res.status(201);
    res.json(newPost);
}

function update(req, res) {

    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    if(!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "post non trovato"
        })
    }

    post.name = req.body.name;

    console.log(posts);

    res.json(post);

}

function modify(req, res) {
    res.send(`Modifica parziale del post con id ${req.params.id}`);
}

function destroy(req, res) {
    delete posts[req.params.id - 1];
    console.log(posts);
    res.sendStatus(204);
}


module.exports = { index, show, store, update, modify, destroy };