// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Create a new express application named 'app'
const app = express();

const redirectionFilter = function (req, res, next) {
    const theDate = new Date();
    const receivedUrl = `${req.protocol}:\/\/${req.hostname}:${port}${req.url}`;
  
    if (req.get('X-Forwarded-Proto') === 'http') {
      const redirectTo = `https:\/\/${req.hostname}${req.url}`;
      console.log(`${theDate} Redirecting ${receivedUrl} --> ${redirectTo}`);
      res.redirect(301, redirectTo);
    } else {
      next();
    }
}

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configure the CORs middleware
app.use(cors());

const getVideo = require('./videos/stream')
app.use('/videos/*', getVideo)

/*const api = require('./routes/routes');
app.use('/api/v1/', api);*/

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.get('*', redirectionFilter)
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

require("dotenv-safe").config()
// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));