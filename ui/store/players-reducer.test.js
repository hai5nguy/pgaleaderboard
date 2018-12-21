import reducer from './players-reducer';

describe('players-reducer', () => {
  describe('PLAYERS_SET_ALL', () => {
    it('should set all players', () => {
      const initialState = [];
      const players = ['blah', 'blue', 'bleh'];
      const action = {
        type: 'PLAYERS_SET_ALL',
        players,
      };
      const newState = reducer(initialState, action);

      expect(newState).toMatchObject(players);
    });
    it('should sort players by score then last name', () => {
      const initialState = [];
      const players = [
        { score: 3, lastName: 'bradley' },
        { score: 2, lastName: 'charles' },
        { score: 2, lastName: 'abbe' },
        { score: 1, lastName: 'smith' },
        { score: 2, lastName: 'buchanan' },
      ];
      const action = {
        type: 'PLAYERS_SET_ALL',
        players,
      };
      const newState = reducer(initialState, action);

      expect(newState).toMatchObject([
        { score: 1, lastName: 'smith' },
        { score: 2, lastName: 'abbe' },
        { score: 2, lastName: 'buchanan' },
        { score: 2, lastName: 'charles' },
        { score: 3, lastName: 'bradley' },
      ]);
    });
  });
});
