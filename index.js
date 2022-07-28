const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { response } = require('express');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nrqlb.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        console.log('database is connected');
        const database = client.db('foodieExpress');
        const foodieExpCollection = database.collection('foodieExpressCollection');
        const orderCollection = database.collection('orders');

        //get restaurant api 
        app.get('/shops', async (req, res) => {
            const cursor = foodieExpCollection.find({});
            const shops = await cursor.toArray();
            res.send(shops);

        })

        //get single service
        app.get('/shop/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await foodieExpCollection.findOne(query);
            res.json(service);
        })

        //post api
        app.post('/add/shop', async (req, res) => {
            const service = req.body;
            const result = await foodieExpCollection.insertOne(service);
            console.log(`A service is inserted with the id: ${result.insertedId}`);
            res.json(result);
        })

        //put / update api
        app.put('/add/menu:id', async (req, res) => {
            const id = req.params.id;
            const parts = req.body;
            const filter = { _id: ObjectId(id) };
            const updateDoc = {
                $set: parts,
            };
            const result = await foodieExpCollection.updateOne(filter, updateDoc);
            res.json(result);
        })

        //add product with key and get them 
        app.post('/foods/usekeys', async (req, res) => {
            const keys = req.body;
            const query = { key: { $in: keys } }
            const products = await foodieExpCollection.find(query).toArray();
            res.send(products);
        })

        //delete api
        app.delete('/deleteshop/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: ObjectId(id) };
            const del = await foodieExpCollection.deleteOne(query);
            res.json(del);

        })

        //add product with key and get them 
        app.post('/products/usekeys', async (req, res) => {
            const keys = req.body;
            const query = { key: { $in: keys } }
            const products = await foodieExpCollection.find(query).toArray();
            res.send(products);
        })

        // order api
        app.post('/orders', async (req, res) => {
            const order = req.body;
            const result = await orderCollection.insertOne(order);
            res.json(result)
        })
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', async (req, res) => {
    res.send('Foodie Express server is alive');
})

app.listen(port, () => {
    console.log('Foodie Express app is listening on port', port)
})