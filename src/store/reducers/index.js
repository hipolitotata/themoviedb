import {combineReducers} from 'redux';

import moviesReducer from './movies.reducer';
import utilsReducer from './utils.reducer';

export default combineReducers({
  moviesReducer,
  utilsReducer,
});
