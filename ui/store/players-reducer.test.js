import reducer from './players-reducer';

describe('players-reducer', () => {
  describe('PLAYERS_SET_ALL', () => {
    it('should set all players sorting by score then last name', () => {
      const initialState = [];
      const players = [
        { _id: '111', lastName: 'ccc', score: 3 },
        { _id: '222', lastName: 'aaa', score: 1 },
        { _id: '333', lastName: 'bbb', score: 1 },
      ];
      const action = {
        type: 'PLAYERS_SET_ALL',
        players: [...players],
      };
      const newState = reducer(initialState, action);

      const expected = [
        { ...players[0], position: 2 },
        { ...players[1], position: 0 },
        { ...players[2], position: 1 },
      ];
      expect(newState).toMatchObject(expected);
    });
  });
});
