const { MongoClient } = require('mongodb')
<<<<<<< HEAD
const connectionUrl = process.env.DB_CONNECTION;

const dbName = process.env.DB_NAME

const init = async () => {
  let client = await MongoClient.connect(connectionUrl)
  console.log('connected to database!', dbName)
  return client.db(dbName)
}
=======
const urlConnection = process.env.DB_CONNECTION;

const dbName = process.env.DB_NAME;

const init = async () => {
  let client = await MongoClient.connect(urlConnection)
  console.log('connected to database!', dbName)
  return client.db(dbName)
};
>>>>>>> 690f94fc6d3add78af39e3d072f684443a79df43

module.exports = { init };