const express = require('express');
const fs = require('fs');
 
const app = express();
const PORT = 3000;
const products = require('./Data/MOCK_DATA.json');
 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 
app.use(express.json())
 
const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://Fede2022:MThVsbARDDn71m7z@mcga-db.6ax3ppw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

run().catch(console.dir);

app.get('/products', (req, res) => {
    res.send(products);
})
 
app.get('/products/byName/:name', (req, res) => {
    let product = products.find(x => x.name == req.params.name);
 
    if(!product)
        return res.status(404).json(product);
 
    res.status(200).json(product);
})
 
app.post('/products', (req, res) => {
    let newProd = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock
    }
 
    products.push(newProd);
    fs.writeFile('./Data/MOCK_DATA.json', JSON.stringify(products), (err) => {
        if(err)
            return res.status(500).json({Message:"Error del servidor"});
    });
    res.status(200).json();
})
 
app.delete('/products/:id', (req, res) => {
    let index = products.findIndex(x => x.id == req.params.id);
    if(index < 0) return res.status(404).json();
 
    products.splice(index, 1);
    fs.writeFile('./Data/MOCK_DATA.json', JSON.stringify(products), (err) => {
        if(err)
            return res.status(500).json({Message:"Error del servidor"});
    });
    res.status(200).json();
})

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}