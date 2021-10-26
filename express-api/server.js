const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

// const bodyParser = require('body-parser');
// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(bodyParser.json());
// server.use(bodyParser.raw());

const userRoutes = require('./routes/users')
const habitRoutes = require('./routes/habits')

server.use('/users', userRoutes)
server.use('/habits', habitRoutes)

// Root route
server.get('/', (req, res) => res.send('Hello to Trabbit website!'))

module.exports = server;