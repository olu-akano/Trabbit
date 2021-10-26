const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const userRoutes = require('./routes/users')
const habitRoutes = require('./routes/habits')
const authRoutes = require('./controllers/auth')

server.use('/auth', authRoutes)
server.use('/users', userRoutes)
server.use('/habits', habitRoutes)

// Root route
server.get('/', (req, res) => res.send('Hello to Trabbit website!'))

module.exports = server;