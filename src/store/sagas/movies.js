import {call, put, all} from 'redux-saga/effects';
import {
  setTreendingSeasons,
  setTreendingMovies,
  setGenresMovie,
  setGenresSeasons,
} from '../actions/movies.actions';

import api, {api_key} from '../../services/api';

const language = 'pt-br';

export function* getTreending({payload}) {
  try {
    const request = () =>
      api.get(
        `/discover/${payload.type_movie}?api_key=${api_key}&language=${language}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
      );
    const {data} = yield call(request);

    if (payload.type_movie === 'movie') {
      yield all([put(setTreendingMovies(data.results))]);
    }

    if (payload.type_movie === 'tv') {
      yield all([put(setTreendingSeasons(data.results))]);
    }
  } catch (error) {
    console.log('ERROR RESPONSE');
  }
}

export function* getGenres({payload}) {
  try {
    const request = () =>
      api.get(
        `/genre/${type_movie}/list?api_key=${api_key}&language=${language}`,
      );
    const {data} = yield call(request);

    console.log('DATA:::::::::::::::::::', data);

    if (payload.type_movie === 'movie') {
      yield all([put(setGenresMovie(data.genres))]);
    }

    if (payload.type_movie === 'tv') {
      yield all([put(setGenresSeasons(data.genres))]);
    }
  } catch (error) {
    console.log('ERROR RESPONSE');
  }
}
