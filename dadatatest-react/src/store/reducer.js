import * as actions from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.GET_IP:
      return [...state, {
      }];
    case actions.GET_LOCATION:
      return [...state, {
      }];
    case actions.SEARCH_LOCATION:
      return [...state, {
      }];
    default:
      return state;
  }
}