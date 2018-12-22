const { ObjectID } = require('mongodb');
const db = require('./db');

/**
 * Get list of players
 * @returns {Object[]} List of players
 */
const getPlayers = () => db.read('players', {});


/**
 * Add player to the players collection
 * @param {Object} player The player
 * @param {string} player.firstName Player's first name
 * @param {string} player.lastName Player's last name
 * @throws Will throw error if unable to add player to database
 * @returns {string} SUCCESS if no errors
 */
const addPlayer = async ({ firstName, lastName, score }) => {
  await db.create('players', {
    firstName,
    lastName,
    score,
  });

  return 'SUCCESS';
};


/**
 * Update a player's detail
 * @param {Object} detail The new detail of the player to be updated
 * @param {string} _id The id of the player to be updated.
 * @param {string} firstName The first name of the player.
 * @param {string} lastName The last name of the player.
 * @param {string} score The score of the player.
 */
const updatePlayer = async ({
  _id, firstName, lastName, score,
}) => {
  await db.update(
    'players',
    { _id: ObjectID(_id) },
    { firstName, lastName, score },
  );
  return 'SUCCESS';
};


/**
 * Delete a player
 * @param {string} _id Id of the player to delete.
 */
const deletePlayer = async ({ _id }) => {
  await db.del(
    'players',
    { _id: ObjectID(_id) },
  );
  return 'SUCCESS';
};

module.exports = {
  getPlayers, addPlayer, updatePlayer, deletePlayer,
};
