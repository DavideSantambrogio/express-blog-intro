const posts = require('../data/data.json');

exports.getPosts = (req, res) => {
    
    res.format({
        'text/plain': function () {
            res.send('Plain text response');
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
        'application/json': function () {
            res.json(posts);
        },
        default: function () {
            res.status(406).send('Not Acceptable');
        }
    });
};
