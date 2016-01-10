import {combineReducers} from 'redux';

import counter from './counter';
import router from './router';

export default combineReducers({
  router,
  counter,
});
