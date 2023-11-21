const express = require('express');

// Import individual route files
const notesRouter = require('./notes');

const app = express();

// Use the imported routes
app.use('/notes', notesRouter);

module.exports = app;