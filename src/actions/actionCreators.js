import * as types from '../constants/actionTypes';

export const hourPress = (bt, et, day) => ({
  type: types.HOUR_PRESS,
  payload: { bt, et, day }
});

export const selectAllDay = (day) => ({
  type: types.SELECT_ALL_DAY,
  payload: { day }
});

export const clearWeek = () => ({
  type: types.CLEAR_WEEK
});
