const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const cr = require('./products_controller')

const app = express();
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
    .then(db => {app.set('db', db)})
    .catch(err => {console.log('Massive Err', err)})

app.get('/api/products', cr.getAll )
app.get('/api/products/:id', cr.getOne)
app.put('/api/products/:id', cr.updateProduct)
app.post('/api/products', cr.createProduct)
app.delete('/api/products/:id', cr.deleteProduct)

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server listening on port ${port}`)})