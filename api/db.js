const { MongoClient } = require('mongodb');

const DATABASE_NAME = process.env.DATABASE_NAME || 'pga';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/';

// The internal db object
let _db; // eslint-disable-line


/**
 * Initialize the mongo connection and store the database
 * client in _db.
 */
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


/**
 * Create a document in a given collection
 * @param {string} collection Name of collection
 * @param {object} doc Document to create/insert
 * @throws Error if creation fail
 * @returns {object} MongoClient promise
 */
const create = async (collection, doc) => _db.collection(collection)
  .insertOne(doc);

/**
 * Read a list of documents in a given collection
 * @param {string} collection Name of collection
 * @param {object} query Query filter to search for
 * @param {object} options Extra options for Mongo
 * @throws Error if reading fail
 * @returns {object[]} List of documents or [] if no documents found
 */
const read = async (collection, query, options) => {
  const list = await _db.collection(collection).find(query, options).toArray();
  return list.map((l) => {
    const { _id, ...rest } = l;
    return { _id: _id.toString(), ...rest };
  });
};

/**
 * Update one document in a given collection
 * @param {string} collection Name of collection
 * @param {object} filter Query filter to search for
 * @param {object} value The new value to update to
 * @throws Error if updating fail
 * @returns {object} MongoClient promise
 */
const update = (collection, filter, value) => _db.collection(collection)
  .findOneAndUpdate(filter, { $set: value }, { upsert: true });


module.exports = {
  start, create, read, update,
};
