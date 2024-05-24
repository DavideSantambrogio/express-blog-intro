// app.js
const express = require('express');
const app = express();
const postsController = require('./controllers/posts');
const path = require('path');

// Configurare gli asset statici
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>');
});

app.get('/posts', postsController.getPosts);

// Gestire la favicon
app.get('/favicon.ico', (req, res) => {
    res.status(404).send('Favicon not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
