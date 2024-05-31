const express = require('express');

const postgres = require("./Shared/DatabaseHandlers/PostgresHandler");

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


// FDSJDJDFS32783278 Error on GetAuthToken method
// Result: [object Object]
// Error: Error: Client has already been connected. You cannot reuse a client.
// Params: {"Username":"erdogan.sireci","Password":"shrek","PlatformType":999}

