const express = require('express');
const app = express();
const postsController = require('./controllers/posts');
const path = require('path');

// Middleware per il parsing del corpo della richiesta
app.use(express.json());

// Configurare gli asset statici
app.use(express.static(path.join(__dirname, 'public')));

// Rotte
app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>');
});

// Rotta per ottenere i post
app.get('/posts', postsController.getPosts);

// Rotta per aggiungere un nuovo post
app.post('/posts', postsController.addPost);

// Gestione della favicon
app.get('/favicon.ico', (req, res) => {
    res.status(404).send('Favicon not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
