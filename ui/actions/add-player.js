// import { dispatch } from 'store';
import api from 'actions/api';

import getPlayers from 'actions/get-players';

export default async () => {
  const { error } = await api('mutation { addPlayer ( firstName: "FirstName" lastName: "LastName" )}');
  if (error) {
    console.log('error', error);
    return;
  }
  getPlayers();
};
