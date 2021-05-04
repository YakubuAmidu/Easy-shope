import { SET_CURRENT_USER } from '../actions/Authactions';

export default function (state, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: [], //TODO
        user: action.payload,
        userProfile: action.userProfile,
      };
    default:
      return state;
  }
}
