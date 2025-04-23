const posts = require('../data/postsList.js');

function index(req,res){
    res.send('Elenco dei post');
}

function show(req,res){
    res.send(`Post con id ${req.params.id}`);
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
    res.send(`Cancellazione del post con id ${req.params.id}`);
}


module.exports = { index, show, store, update, modify, destroy};