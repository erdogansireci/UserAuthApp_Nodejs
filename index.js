const express = require('express');
const app = express();

var ip = ""; // ???
var port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes, services
app.use('/services', require('./routes/service/AuthenticationService'));

// start server
app.listen(port, () => {
    console.log("Server started on port" + port);
});

