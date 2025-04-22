function index(req, res) {
    res.send('Lista dei post');
}

function show(req, res) {
    res.send(`Dettaglio del post ${req.params.id}`);
}


function store(req, res) {
    res.send("Inserimento di un nuovo post");
}

function update(req, res) {
    res.send(`Modifica totale del post ${req.params.id}`);
}

function modify(req, res) {
    res.send(`Modifica parziale del post ${req.params.id}`);
}

function destroy(req, res) {
    res.send(`Cancellazione del post ${req.params.id}`);
}