// import { dispatch } from 'store';
import api from 'actions/api';
import getPlayers from 'actions/get-players';

export default async (_id) => {
  const { error } = await api(`mutation { deletePlayer ( _id: "${_id}" )}`);
  if (error) {
    console.error(error);
    return;
  }
  getPlayers();
};
