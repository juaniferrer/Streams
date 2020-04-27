import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (previousState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...previousState, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...previousState, isSignedIn: false, userId: null };
    default:
      return previousState;
  }
};
