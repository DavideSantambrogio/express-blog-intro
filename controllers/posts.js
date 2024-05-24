const posts = require('../data/data.json');

// Funzione per ottenere tutti i post
exports.getPosts = (req, res) => {
    const accept = req.headers.accept;

    res.format({
        'application/json': function () {
            res.json(posts);
        },
        'text/html': function () {
            let html = '<ul>';
            posts.forEach(post => {
                html += `<li>
                            <h2>${post.title}</h2>
                            <img src="${post.image}" alt="${post.title}">
                            <p>${post.content}</p>
                            <p>Tags: ${post.tags.join(', ')}</p>
                        </li>`;
            });
            html += '</ul>';
            res.send(html);
        },
        default: function () {
            res.status(406).send('Not Acceptable');
        }
    });
};

// Funzione per aggiungere un nuovo post
exports.addPost = (req, res) => {
    const { title, content, image, tags } = req.body;

    // Verifica che tutti i campi siano presenti nella richiesta
    if (!title || !content || !image || !tags) {
        return res.status(400).json({ error: 'Assicurati di fornire tutti i campi necessari: title, content, image e tags' });
    }

    // Crea un nuovo post
    const newPost = {
        title,
        content,
        image,
        tags
    };

    // Aggiungi il nuovo post all'array dei post
    posts.push(newPost);

    // Invia una risposta con il nuovo post aggiunto e lo status code 201 Created
    res.status(201).json(newPost);
};
