import {all, takeEvery, take} from 'redux-saga/effects';
import {GET_TREENDING} from '../actions/action-types';

import {getTreending} from './movies';

export default function* rootSaga() {
  yield all([takeEvery(GET_TREENDING, getTreending)]);
}
