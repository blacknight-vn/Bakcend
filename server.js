const express = require('express');
const cors = require('cors');

let app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json({message: 'Hello'})
})

app.listen(8080, () => {
    console.log('Successfully Running On Port: 8080')
})