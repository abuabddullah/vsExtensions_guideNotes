const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const jwt = require('jsonwebtoken');


const app = express()
const port = process.env.PORT || 5000;


// const corsConfig = {
//   origin: true,
//   credentials: true,
// }
// app.use(cors(corsConfig))
// app.options('*', cors(corsConfig))



app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://module65-crud-operations:123456789abcde@cluster0.1jtbz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

console.log(uri);

client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Connected to MongoDB");
  // perform actions on the collection object
  client.close();
});




app.get('/', (req, res) => {
    res.send('Hello World! Its for CRUD Operations')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})