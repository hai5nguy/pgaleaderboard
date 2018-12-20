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
      const player = { firstName: 'bob', lastName: 'smith' };
      const result = await resolvers.addPlayer(player);
      expect(db.create).toHaveBeenCalledWith('players', { ...player, score: 0 });
      expect(result).toEqual('SUCCESS');
    });
  });
  describe('updatePlayer', () => {
    it('should update a player with given _id', async () => {
      db.update = jest.fn();
      const player = {
        _id: 1, firstName: 'bob', lastName: 'smith', score: 3,
      };
      const result = await resolvers.updatePlayer(player);
      expect(db.update)
        .toHaveBeenCalledWith(
          'players',
          { _id: player._id },  // eslint-disable-line
          {
            firstName: player.firstName,
            lastName: player.lastName,
            score: player.score,
          },
        );
      expect(result).toEqual('SUCCESS');
    });
  });
});
