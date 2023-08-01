const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.json({Message: 'Hello'})
})

app.listen(8080, () => {
    console.log('Successfully Running On Port: 8080')
})