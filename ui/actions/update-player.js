// import { dispatch } from 'store';
import api from 'actions/api';
import getPlayers from 'actions/get-players';

export default async ({
  _id, firstName, lastName, score,
}) => {
  const { error } = await api(`mutation { updatePlayer ( _id: "${_id}" firstName: "${firstName}" lastName: "${lastName}" score: ${score} )}`);
  if (error) {
    console.error(error);
    return;
  }
  getPlayers();
};
