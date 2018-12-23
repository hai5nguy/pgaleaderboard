const sortByScoreAndLastName = (a, b) => {
  if (a.score > b.score) return 1;
  if (b.score > a.score) return -1;

  if (a.lastName > b.lastName) return 1;
  if (b.lastName > a.lastName) return -1;

  return 0;
};

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYERS_SET_ALL': {
      const players = [...action.players];

      const idAndPosition = {};

      action.players.sort(sortByScoreAndLastName).forEach((p, i) => {
        idAndPosition[p._id] = i;
      });


      return players.map(p => ({ position: idAndPosition[p._id], ...p }));
    }
    default:
      return state;
  }
};
