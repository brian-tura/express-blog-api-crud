const posts = require('../data/postsList.js');

function index(req,res){
    res.json(posts);
}

function show(req,res){
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);
    if(!post){
        res.sendStatus(404);
    }
    res.json(post);
}

function store(req,res){
    res.send('Inserimento nuovo post');
}

function update(req,res){
    res.send(`Modifica totale del post con id ${req.params.id}`);
}

function modify(req,res){
    res.send(`Modifica parziale del post con id ${req.params.id}`);
}

function destroy(req,res){
    delete posts[req.params.id -1];
    console.log(posts);
    res.sendStatus(204);
}


module.exports = { index, show, store, update, modify, destroy};