const piatti = require('../data/posts_data.js')

function index(req, res) {
    res.send('Lista dei post');
}

function show(req, res) {
    res.send(`Dettaglio del post ${req.params.id}`);
}


function store(req, res) {
    // console.log(req.body);
    const newId = posts[posts.length - 1].id + 1;
    
    const {title,content,image,tags} = req.body
    const newPost = {
                id : newId,
                title : title,
                content : content,
                image : image,
                tags : tags
    }
    pietanze.push(newPost);
   
    console.log(posts);

    res.status(201);

    res.json(newPost)
}

function update(req, res) {
    const id = parseInt(req.params.id);
    res.send(`Modifica totale del post ${req.params.id}`);
}

function modify(req, res) {
    res.send(`Modifica parziale del post ${req.params.id}`);
}

function destroy(req, res) {
    res.send(`Cancellazione del post ${req.params.id}`);
}

module.exports = { index, show, store, update, modify, destroy };