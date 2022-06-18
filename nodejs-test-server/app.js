const express = require('express'),
    app = express();

let fs = require('fs');

const hostname = 'localhost';
const port = 3100;

app.get("/api/film", (req, res) => {
    fs.readFile('./data.json', {encoding: 'utf-8'}, function(err, data){
        if (!err) {
            res.status(200).type('text').send(data);
        } else {
            console.log(err);
        }
    });
});

app.post("/api/film/:id/:name/:duration/:stars", (req, res) => {
    fs.readFile('./data.json', {encoding: 'utf-8'}, function(err, data_json){
        if (!err) {
            let data = JSON.parse(data_json);

            const id = req.params.id;
            const name = req.params.name;
            const duration = req.params.duration;
            const stars = req.params.stars;

            data.push({
                id: id,
                name: name,
                duration: duration,
                stars: stars
            });
        
            fs.writeFile('./data.json', JSON.stringify(data), () => { res.status(200).type('text').send(`Film was created!`); });
        } else {
            console.log(err);
        }
    });
});

app.put('/api/film/:id/:name/:duration/:stars', (req, res) => {
    fs.readFile('./data.json', {encoding: 'utf-8'}, function(err, data_json){
        if (!err) {
            let data = JSON.parse(data_json);

            const id = req.params.id;
            const name = req.params.name;
            const duration = req.params.duration;
            const stars = req.params.stars;

            data[id] = {
                id: id,
                name: name,
                duration: duration,
                stars: stars
            };
        
            fs.writeFile('./data.json', JSON.stringify(data), () => { res.status(200).type('text').send(`Film was updated!`); });
        } else {
            console.log(err);
        }
    });
});

app.delete('/api/film/:id', (req, res) => {
    fs.readFile('./data.json', {encoding: 'utf-8'}, function(err, data_json){
        if (!err) {
            let data = JSON.parse(data_json);

            const id = req.params.id;

            let obj = [];
            data.map((item) => {
                if (id != item.id)
                {
                    obj.push(item);
                }
            });
        
            fs.writeFile('./data.json', JSON.stringify(obj), () => { res.status(200).type('text').send(`Film was deleted!`); });
        } else {
            console.log(err);
        }
    });
});

app.use((req, res, next) => {
    res.status(404).type('text').send("Page Not Found!");
})

app.listen(port, hostname, () => {
    console.log(`Server is listening on http://${hostname}:${port}!`);
});