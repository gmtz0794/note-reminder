const express = require('express');
const router = express.Router();

// Import individual route files
const notesRouter = require('./notes');

// Use the imported routes
router.use('/api/notes', notesRouter);

module.exports = router;