import {call, put, all} from 'redux-saga/effects';
import {setLoading} from '../actions/utils.actions';
import {setMovies, setSeasons} from '../actions/utils.actions';
import api from '../../services/api';

export function* getMovies({payload}) {
  //   yield put(setLoading(true));

  try {
    const request = () => api.get('/movies');
    const {data} = yield call(request);
    if (payload.movies) {
      yield all([put(setMovies(data))]);
    }

    if (payload.seasons) {
      yield all([put(setSeasons(data))]);
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoading(false));
  }
}
