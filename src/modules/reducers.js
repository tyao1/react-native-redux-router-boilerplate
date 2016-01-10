import {combineReducers} from 'redux';

import counter from './counter';
import router from './router';
import news from './news';

export default combineReducers({
  router,
  counter,
  news,
});
