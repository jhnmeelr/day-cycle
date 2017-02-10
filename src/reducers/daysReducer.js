import { some, cloneDeep, isEqual } from 'lodash';
import initialState from './initialState';

import { HOUR_PRESS, SELECT_ALL_DAY, CLEAR_WEEK } from '../constants/actionTypes';
import { ALL_DAY } from '../constants/appConstants';

export default function daysReducer(state = initialState.days, action) {
  let newState = cloneDeep(state);
  let payloadInterval, newIntervals, day;

  switch (action.type) {
    case HOUR_PRESS:
      payloadInterval = { bt: action.payload.bt, et: action.payload.et };
      day = action.payload.day;

      for (let i = 0; i < newState[day].length; i++) {
        if (payloadInterval.bt >= newState[day][i].bt && payloadInterval.et <= newState[day][i].et) {
          return newState;
        }
      }

      for (let i = 0; i < newState[day].length; i++) {
        if (payloadInterval.et === newState[day][i].bt - 1) {
          newState[day][i].bt = payloadInterval.bt;
          return newState;
        } else if (payloadInterval.bt === newState[day][i].et + 1) {
          newState[day][i].et = payloadInterval.et;
          return newState;
        }
      }

      if (!some(newState[day], payloadInterval)) {
        newIntervals = [...newState[day], payloadInterval];
        newState[day] = newIntervals;
        return newState;
      }

      return state;

    case SELECT_ALL_DAY:
      if (!isEqual(newState[action.payload.day], ALL_DAY)) {
        newState[action.payload.day] = ALL_DAY;
      } else if (isEqual(newState[action.payload.day], ALL_DAY)) {
        newState[action.payload.day] = [];
      }
      return newState;

    case CLEAR_WEEK:
      return initialState.days;

    default:
      return state;
  }
}
