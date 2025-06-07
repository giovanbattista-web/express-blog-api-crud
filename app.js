// IMPORTO EXPRESS
const express = require('express');

// INIZIALIZZO EXPRESS NELLA VARIABILE APP 
const app = express();

// INIZIALIZZO IL NUMERO DI PORTA 
const port = 3000;

// INDICHIAMO AD EXPRESS DI TRATTARE IL BODY DELLE RICHIESTE COME JSON 
app.use(express.json());

// IMPORTO IL ROUTER 
const postRouter = require('./router/posts.js');

// UTILIZZO IL ROUTER PER DEFINIRE LE VARIE ROTTE PER I POST
app.use('/posts', postRouter);

// DEFINISCO LA ROTTA BASE 
app.get('/', (req, res) => {
    res.send("Homepage");
})

// DICIAMO AL SERVER DI RIMANERE IN ASCOLTO SULLA PORTA 3000 
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
})
