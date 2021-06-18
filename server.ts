// const express = require('express');
import express from 'express';
import { ErrorRequestHandler } from 'express';
import './models';
import usersRoutes from './routes/usersRoutes';

const PORT = process.env.PORT || 4000;
const app = express();

// const cors = require('cors');
// app.use(cors())

app.use(express.json());

// API routes
app.use('/api/v1/users', usersRoutes);
// app.use('/api/v1/lists', routes.lists);
// app.use('/api/v1/weeks', routes.weeks);

// error handling
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message });
}
app.use(errorHandler);

// listen
app.listen(PORT, () => console.log(`Server on port http://localhost:${PORT}`));
