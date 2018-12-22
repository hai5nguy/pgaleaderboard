// import { dispatch } from 'store';
import api from 'actions/api';
import getPlayers from 'actions/get-players';

export default async ({
  _id, firstName, lastName, score,
}) => {
  console.log('update-player _id', _id);
  const { error } = await api(`mutation { updatePlayer ( _id: "${_id}" firstName: "${firstName}" lastName: "${lastName}" score: ${score} )}`);
  if (error) {
    console.log('error', error);
    return;
  }
  getPlayers();
};
