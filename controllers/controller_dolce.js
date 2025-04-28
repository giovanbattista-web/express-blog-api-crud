const piatti = require('../data/posts_data.js')

function index(req, res) {
    res.send('Lista dei post');
}

function show(req, res) {
    res.send(`Dettaglio del post ${req.params.id}`);
}


function store(req, res) {
    // console.log(req.body);
    const newId = piatti[piatti.length - 1].id + 1;
    
    const {title,content,image,tags} = req.body;
    const newPost = {
                id : newId,
                title : title,
                content : content,
                image : image,
                tags : tags
    }
    piatti.push(newPost);
   
    console.log(piatti);

    res.status(201);

    res.json(newPost)
}

function update(req, res) {
    const id = parseInt(req.params.id);

    const post = piatti.find( post => post.id === id);

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(piatti);

    res.json(piatti);

    // res.send(`Modifica totale del post ${req.params.id}`);
}

function modify(req, res) {
    res.send(`Modifica parziale del post ${req.params.id}`);
}

function destroy(req, res) {
    res.send(`Cancellazione del post ${req.params.id}`);
}

module.exports = { index, show, store, update, modify, destroy };