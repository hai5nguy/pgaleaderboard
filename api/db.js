const { MongoClient } = require('mongodb');

const DATABASE_NAME = process.env.DATABASE_NAME || 'pga';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/';


let _db;

const start = async () => {
  try {
    const client = await MongoClient.connect(
      DATABASE_URL + DATABASE_NAME,
      { useNewUrlParser: true },
    );
    _db = client.db(DATABASE_NAME);
    console.log('Mongo server connected:', DATABASE_URL + DATABASE_NAME);
  } catch (err) {
    console.error('Unable to connect to mongo server.', err);
  }
};


module.exports = { start };
