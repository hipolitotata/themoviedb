import {call, put, all} from 'redux-saga/effects';
import {
  setTreendingSeasons,
  setTreendingMovies,
  setGenresMovie,
  setGenresSeasons,
  setMovies,
  setSeasons,
  setLoadingSearch,
  setSearchDiscovery,
} from '../actions/movies.actions';

import api, {api_key} from '../../services/api';

const language = 'pt-br';

export function* getTreending({payload}) {
  try {
    const request = () =>
      api.get(
        `/discover/${payload.type_movie}?api_key=${api_key}&language=${language}&sort_by=popularity.desc&page=200&timezone=America%2FNew_York&include_null_first_air_dates=false`,
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
        `/genre/${payload.type_movie}/list?api_key=${api_key}&language=${language}`,
      );
    const {data} = yield call(request);

    if (payload.type_movie === 'movie') {
      yield all([put(setGenresMovie(data.genres))]);
    }

    if (payload.type_movie === 'tv') {
      yield all([put(setGenresSeasons(data.genres))]);
    }
  } catch (error) {
    console.log('ERROR RESPONSE', error);
  }
}

export function* getDiscover({payload}) {
  try {
    const request = () =>
      api.get(
        `/discover/${payload.type_movie}?api_key=${api_key}&language=${language}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
      );
    const {data} = yield call(request);

    if (payload.type_movie === 'movie') {
      yield all([put(setMovies(data.results))]);
    }

    if (payload.type_movie === 'tv') {
      yield all([put(setSeasons(data.results))]);
    }
  } catch (error) {
    console.log('ERROR RESPONSE', error);
  }
}

export function* findDiscovery({payload}) {
  yield put(setLoadingSearch(true));
  console.log('bateu aqui');
  try {
    const request = () =>
      api.get(
        `/discover/tv?api_key=${api_key}&language=${language}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
      );
    const {data} = yield call(
      request);
  } catch (error) {
    console.log('ERROR RESPONSE', error);
  } finally {
    yield put(setSearchDiscovery([1, 2, 3, 4]));
    yield put(setLoadingSearch(false));
  }
}
