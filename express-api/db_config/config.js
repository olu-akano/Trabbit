const { MongoClient } = require('mongodb')
const connectionUrl = process.env.DB_CONNECTION;
const dbName = process.env.DB_NAME
// const connectionUrl = `mongodb+srv://trabbit:corgie@cluster0.wwvgu.mongodb.net/${dbName}?retryWrites=true&w=majority`

const init = async () => {
  let client = await MongoClient.connect(connectionUrl)
  console.log('connected to database!', dbName)
  return client.db(dbName)
}

module.exports = { init };