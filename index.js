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
        const menuCollection = database.collection('menuCollection');

        //get restaurant api 
        app.get('/shops', async (req, res) => {
            console.log('this is working')
            const cursor = foodieExpCollection.find({});
            const shops = await cursor.toArray();
            res.send(shops);

        })

        //get single service
        app.get('/shop/:name', async (req, res) => {
            const name = req.params.name;
            const query = { resturent_name: name };
            const service = await foodieExpCollection.findOne(query);
            res.json(service);
        })

        //post api
        app.post('/add/shop', async (req, res) => {
            const service = req.body;
            const result = await foodieExpCollection.insertOne(service);
            console.log(`A new shop is inserted with the id: ${result.insertedId}`);
            res.json(result);
        })

        //post menu
        app.post('/add/menu/:name', async (req, res) => {
            const menu = req.body;
            const result = await menuCollection.insertOne(menu);
            console.log(`A service is inserted with the id: ${result.insertedId}`);
            res.json(result);
        })

        //get shop menu
        app.get('/shop/menu/:name', async (req, res) => {
            const name = req.params.name;
            console.log(name)
            const query = { shopName: name };
            const cursor = await menuCollection.find(query);
            const service = await cursor.toArray();
            console.log(service);
            res.json(service);
        })

        //find all menu
        app.get('/menus', async (req, res) => {
            console.log('this is working')
            const cursor = menuCollection.find({});
            const shops = await cursor.toArray();
            res.send(shops);

        })


        //delete shop api
        app.delete('/deleteshop/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: ObjectId(id) };
            const del = await foodieExpCollection.deleteOne(query);
            res.json(del);

        })

        //get order api 
        app.get('/all/orders', async (req, res) => {
            const cursor = orderCollection.find({});
            const orders = await cursor.toArray();
            res.send(orders);

        })
        // order api
        app.post('/orders', async (req, res) => {
            const order = req.body;
            const result = await orderCollection.insertOne(order);
            res.json(result)
        })

        //order shop api
        app.delete('/delete/order/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: ObjectId(id) };
            const del = await orderCollection.deleteOne(query);
            res.json(del);

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