import { createStore, combineReducers } from 'redux';
import spinnerReducer from './Spinner/spinnerReducer';

var combinedReducers = combineReducers({spinner : spinnerReducer});
let store = createStore(combinedReducers);
export default store;