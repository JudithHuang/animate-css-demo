import { combineReducers } from 'redux';
import { i18n } from 'redux-pagan';
import { routerStateReducer as router } from 'redux-router';
import custom from './custom';

const rootReducer = combineReducers({
  router,
  i18n,
  custom,
});

export default rootReducer;
