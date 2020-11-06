import {
  SET_MOVIES,
  SET_TREENDING_MOVIES,
  SET_SEASONS,
  SET_TREENDING_SEASONS,
} from '../actions/action-types';

const initialState = {
  treendingMovies: [],
  movies: [],
  treendingSeasons: [],
  seasons: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case SET_TREENDING_MOVIES:
      return {
        ...state,
        treendingMovies: action.payload,
      };
    case SET_SEASONS:
      return {
        ...state,
        seasons: action.payload,
      };
    case SET_TREENDING_SEASONS:
      return {
        ...state,
        treendingSeasons: action.payload,
      };
    default:
      return state;
  }
};
