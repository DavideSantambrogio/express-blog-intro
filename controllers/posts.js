const posts = require('../data/data');

exports.getPosts = (req, res) => {
    const accept = req.headers.accept;

    if (accept.includes('application/json')) {
        res.json(posts);
    } else if (accept.includes('text/html')) {
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
    } else {
        res.status(406).send('Not Acceptable');
    }
};
