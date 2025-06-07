// IMPORTIAMO I DATI
const posts = require('../data/posts.js');

// INDEX 
function index(req, res) {
    //console.log(posts);
    //res.send('Elenco dei post');
    res.json(posts);
}

// SHOW 
function show(req, res) {
    const id = parseInt(req.params.id);

    // RECUPERIAMO IL POST
    const post = posts.find((post) => {
        return post.id == id;
    });

    // INVIO IL POST
    res.json(post);

    // console.log(post);
    // res.send(`Post con id ${req.params.id}`);
}

// STORE
function store(req, res) {
    //( req.query.nomeParametro PER LE QUERY STRING, UTILE PER FILTRAGGI AD ESEMPIO 
    // QUANDO VOGLIAMO FILTRARE I DATI DI UNA TABELLA OVVERO QUANDO VOGLIAMO MANTENERE DELLE 
    // INFORMAZIONI NELL'URL, OPPURE AD ESEMPIO QUANDO VOGLIAMO CHE L'UTENTE UNA VOLTA AGGIORNATO LA PAGINA
    // POTRA' MANTENERE QUEI DATI, LE QUERY STRING VENGONO PASSATE COME COPPIE CHIAVE VALORE 
    // NON SI USANO PER DATI SENSIBILI AD ESEMPIO LE PASSWORD, VIENE UTILIZZATO IN LETTURA)

    // (req.params.nomeParametro, IN QUESTO CASO IL PARAMETRO E' SEMPRE PRESENTE NELL'URL MA QUESTA VOLTA 
    // IL PARAMETRO E' PARTE INTEGRANTE DELL'URL, IN QUESTO CASO SI TRATTA DI UNA RISORSA ALL'INTERNO DEL NOSTRO DB,
    // RISORSA NON E' PRESENTE CI DA' ERRORE, IN GENERE VIENE PASSATO L'id, QUESTI PARAMETRI VENGONO CHIAMATI DINAMICI,
    // SI VA A RECUPERARE UNA DETERMINATA RISORSA, IN LETTURA)

    // (req.body.nomeParametro : BODY PARAMS, VIENE UTILIZZATA SOPRATTUTTO PER LE OPERAZIONI DI SCRITTURA 
    // IN QUESTO CASO I DATI DEVONO ESSERE SALVATI PER CREARE QUALCOSA DI NUOVO, IN QUESTO CASO SI VA AD INSERIRE
    // O MODIFICARE QUALCOSA CHE E' GIA' ESISTENTE)

    // res.send('Inserimento di un nuovo post');

    // console.log(req.body);

    // GENERARE IL NUOVO id
    const newId = posts[posts.length - 1].id + 1;

    // CREIAMO IL NOSTRO NUOVO OGGETTO

    // DESTRUTTURIAMO IL BODY DELLA RICHIESTA PER ALLEGERIRE LA SCRITTURA
    const { title, content, image, tags } = req.body;

    // const newPost = {
    // title: req.body.title,
    // content: req.body.content,
    // image: req.body.image,
    // tags: req.body.tags
    // }

    const newPost = {
        id: newId,
        title,
        content,
        image,
        tags
    }

    // AGGIUNGIAMO L'OGGETTO ALL'ARRAY
    posts.push(newPost);

    console.log(posts);

}

// UPDATE
function update(req, res) {
    res.send(`Modifica totale del post con id ${req.params.id}`);
}

// MODIFY
function modify(req, res) {
    res.send(`Modifica parziale del post con id ${req.params.id}`);
}

// DESTROY
function destroy(req, res) {

    const id = parseInt(req.params.id);

    // RECUPERIAMO IL POST
    const post = posts.find(post => post.id == id);

    // CANCELLO IL POST DALL'ARRAY 
    posts.splice(posts.indexOf(post), 1);

    console.log(posts);

    // RESTITUISCO IL CODICE DI STATO 204
    res.sendStatus(204);
    // res.send(`Cancellazione del post con id ${req.params.id}`);
}

module.exports = { index, show, store, update, modify, destroy };