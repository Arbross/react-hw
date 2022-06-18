const express = require('express'),
    app = express();
const cors = require('cors');

let fs = require('fs');

const hostname = 'localhost';
const port = 3100;

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.get("/api/Event", (req, res) => {
    const mongo = require("mongodb").MongoClient
    mongo.connect(
      'mongodb+srv://Arbross:edcrfv234@cluster0.asow9ap.mongodb.net/?retryWrites=true&w=majority',
      (err, client) => {
        if (err) {
          console.log('Connection error: ', err)
          throw err
        }
    
        const db = client.db('db_events')
        db.collection("events").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.status(200).type('text').send(result);
        });
      }
    )
});

app.post("/api/Event/:name/:address/:isOnline/:description/:tags/:image", (req, res) => {
    const mongo = require("mongodb").MongoClient
    mongo.connect(
      'mongodb+srv://Arbross:edcrfv234@cluster0.asow9ap.mongodb.net/?retryWrites=true&w=majority',
      (err, client) => {
        if (err) {
          console.log('Connection error: ', err)
          throw err
        }
    
        const db = client.db('db_events')
        const collection = db.collection('events');

        const name = req.params.name;
        const address = req.params.address;
        const isOnline = req.params.isOnline;
        const description = req.params.description;
        const tags = req.params.tags;
        const image = req.params.image;

        collection.insertOne(
            {
              name: name,
              address: address,
              isOnline: isOnline,
              description: description,
              tags: tags,
              image: image,
            },
            (err, result) => {
              if (err) {
                console.log('Unable insert event: ', err)
                throw err
              }
            }
          )

        res.status(200).type('text').send("Done!");
      }
    )
});

app.use((req, res, next) => {
    res.status(404).type('text').send("Page Not Found!");
})

app.listen(port, hostname, () => {
    console.log(`Server is listening on http://${hostname}:${port}!`);
});