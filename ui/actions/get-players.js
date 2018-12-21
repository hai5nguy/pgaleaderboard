import { dispatch } from 'store';
import api from 'actions/api';

export default async () => {
  const { error, data } = await api('query { getPlayers { _id firstName lastName score }}');
  if (error) {
    console.log('error', error);
    return;
  }
  const { getPlayers: players } = data;
  dispatch({ type: 'PLAYERS_SET_ALL', players });
};
