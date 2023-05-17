const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port=process.env.PORT || 5000;
const app=express();
app.use(cors());
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9avspzh.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });


async function run(){
try{
const serviceOptionCollection=client.db('tourTravel').collection('serviceOptions');
app.get('/serviceOptions',async(req,res)=>{
    const query={}
    const options=await serviceOptionCollection.find(query).toArray();
    res.send(options);
})
}
finally{

}
}

run().catch(console.log)
app.get('/',async(req,res)=>{
res.send('Tour and Travel website is running')
});
app.listen(port,()=>console.log(`Tour and Travel website is running ${port}`))