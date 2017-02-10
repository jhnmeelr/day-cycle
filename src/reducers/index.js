import { combineReducers } from 'redux';
import days from './daysReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  days,
  routing: routerReducer
});

export default rootReducer;
