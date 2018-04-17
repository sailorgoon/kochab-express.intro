const express = require('express');
//this is both an object and a function
const app = express();
const PORT = 5000; //port is the door on our computer, b/t 1 and 9999?
//you can use more than one port

app.get('/', function (req, res) { //this is an anonymous callback function. study.
    res.send('Hello World');
});

app.get('/hey', function (req, res) { //this is an anonymous callback function. study.
    res.send('heyo');
});
    app.listen(PORT, function () {
        console.log(`listening on port: ${PORT}`);
    });

