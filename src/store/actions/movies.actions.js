import {
  GET_TREENDING,
  SET_SEASONS,
  SET_MOVIES,
  SET_TREENDING_MOVIES,
  SET_TREENDING_SEASONS,
} from './action-types';

export const setSeasons = (payload) => ({
  type: SET_SEASONS,
  payload,
});

export const setMovies = (payload) => ({
  type: SET_MOVIES,
  payload,
});

export const setTreendingMovies = (payload) => ({
  type: SET_TREENDING_MOVIES,
  payload,
});

export const setTreendingSeasons = (payload) => ({
  type: SET_TREENDING_SEASONS,
  payload,
});

export const getTreending = (payload) => ({
  type: GET_TREENDING,
  payload,
});
