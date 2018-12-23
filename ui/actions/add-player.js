// import { dispatch } from 'store';
import api from 'actions/api';

import getPlayers from 'actions/get-players';

export default async ({ firstName, lastName, score }) => {
  const s = parseInt(score, 10);
  const { error } = await api(`mutation { addPlayer ( firstName: "${firstName}" lastName: "${lastName}" score: ${s} )}`);
  if (error) {
    console.error(error);
    return;
  }
  getPlayers();
};
