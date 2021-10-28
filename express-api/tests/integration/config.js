const request = require('supertest');
const { MongoClient } = require('mongodb')
const connectionUrl = process.env.DB_CONNECTION;
const dbName = process.env.DB_NAME
const init = require('../../db_config/config');
const app = require('../../server.js');

const {seeds} = require('./seeds')


global.seeds = seeds;
global.request = request;
global.app = app;
global.port = process.env.PORT || 5000;