import { combineReducers } from 'redux';
import counter from './increment';

const reducer = combineReducers({
  counter,
});
export default reducer;
