const express = require('express'); // This imports the express package that was installed in the previous step.
const app = express();// This creates an instance of an Express application.
const cors = require('cors');  // This is a third-party middleware function that allows us to enable CORS with various options.

app.use(cors());// This will enable CORS for all routes.
app.use(express.json());// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

app.use(express.urlencoded({extended:true}));   // This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
 module.exports = app; // This exports the app object. This is required for the app to be used in other files.
