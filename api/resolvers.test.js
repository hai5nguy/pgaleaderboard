const { ObjectID } = require('mongodb');

const db = require('./db');
const resolvers = require('./resolvers');

jest.mock('./db');

describe('Resolvers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('getPlayers', () => {
    it('should return a list of players', () => {
      db.read = jest.fn().mockReturnValue(['some player']);
      const players = resolvers.getPlayers();
      expect(players.length).toBeGreaterThan(0);
    });
  });
  describe('addPlayer', () => {
    it('should add a player with score 0', async () => {
      db.create = jest.fn();
      const player = { firstName: 'bob', lastName: 'smith', score: 1 };
      const result = await resolvers.addPlayer(player);
      expect(db.create).toHaveBeenCalledWith('players', player);
      expect(result).toEqual('SUCCESS');
    });
  });
  describe('updatePlayer', () => {
    it('should update a player with given _id', async () => {
      db.update = jest.fn();
      const player = {
        _id: '1234567890af', firstName: 'bob', lastName: 'smith', score: 3,
      };
      const result = await resolvers.updatePlayer(player);
      expect(db.update)
        .toHaveBeenCalledWith(
          'players',
          { _id: ObjectID(player._id) },  // eslint-disable-line
          {
            firstName: player.firstName,
            lastName: player.lastName,
            score: player.score,
          },
        );
      expect(result).toEqual('SUCCESS');
    });
  });
  describe('deletePlayer', () => {
    it('should delete a player with given _id', async () => {
      db.del = jest.fn();
      const player = {
        _id: '1234567890af',
      };
      const result = await resolvers.deletePlayer(player);
      expect(db.del)
        .toHaveBeenCalledWith(
          'players',
          { _id: ObjectID(player._id) },
        );
      expect(result).toEqual('SUCCESS');
    });
  });
});
