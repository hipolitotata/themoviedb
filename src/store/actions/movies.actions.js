import {SET_SEASONS, SET_MOVIES} from './action-types';

export const setSeasons = (payload) => ({
  type: SET_SEASONS,
  payload,
});

export const setMovies = (payload) => ({
  type: SET_MOVIES,
  payload,
});
