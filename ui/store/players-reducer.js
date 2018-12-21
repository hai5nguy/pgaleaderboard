const initialState = [
  // {
  //   _id: '1', firstName: 'bob1', lastName: 'smith1', score: 1,
  // },
  // {
  //   _id: '2', firstName: 'bob2', lastName: 'smith2', score: 2,
  // },
  // {
  //   _id: '3', firstName: 'bob3', lastName: 'smith3', score: 3,
  // },
  // {
  //   _id: '4', firstName: 'bob4', lastName: 'smith4', score: 4,
  // },
  // {
  //   _id: '5', firstName: 'bob5', lastName: 'smith5', score: 5,
  // },
];

const sortByScoreAndLastName = (a, b) => {
  if (a.score > b.score) return 1;
  if (b.score > a.score) return -1;

  if (a.lastName > b.lastName) return 1;
  if (b.lastName > a.lastName) return -1;

  return 0;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYERS_SET_ALL': {
      const players = action.players.sort(sortByScoreAndLastName);
      return players;
    }
    default:
      return state;
  }
};
