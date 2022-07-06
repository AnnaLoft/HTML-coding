import * as actions from './actionTypes';
export const getIP = id => ({
  type: actions.GET_IP,
//   payload: id
});
export const getLocation = location => ({
  type: actions.GET_LOCATION,
//   payload: { location }
});
export const searchLocation = query => ({
  type: actions.SEARCH_LOCATION,
  payload: { query }
})