const express = require('express');

const app = express();

app.post('/users', (req, res) => {
    return res.json({ message: "Hello Omnistack"});

});

app.listen(3333);
