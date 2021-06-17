// const express = require('express');
import express from 'express';
import { ErrorRequestHandler } from 'express';
// import { Request, Response, NextFunction } from 'express';
// const routes = require('./routes');

const PORT = process.env.PORT || 4000;
const app = express();

// const cors = require('cors');
// app.use(cors())

// app.use(express.json());

// API routes
// app.use('/api/v1/users', routes.users);
// app.use('/api/v1/lists', routes.lists);
// app.use('/api/v1/weeks', routes.weeks);

// error handling
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message });
}
app.use(errorHandler);

// listen
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
