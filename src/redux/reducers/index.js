import { combineReducers } from 'redux';

import key from './key';
import encrypt from './encrypt';
import decrypt from './decrypt';

const rootReducer = combineReducers({
  key,
  encrypt,
  decrypt
})

export default rootReducer;