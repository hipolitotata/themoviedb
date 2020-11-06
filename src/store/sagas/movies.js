import {call, put, all} from 'redux-saga/effects';
import {setLoading} from '../actions/utils.actions';
import {
  setTreendingSeasons,
  setTreendingMovies,
} from '../actions/movies.actions';
import api, {api_key} from '../../services/api';

export function* getTreending({payload}) {
  //   yield put(setLoading(true));

  const language = 'pt-br';

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
  } finally {
    yield put(setLoading(false));
  }
}
