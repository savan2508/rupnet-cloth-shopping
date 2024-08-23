import { USER_ACTION_TYPES } from "./user.types";
import { createSlice } from "@reduxjs/toolkit";

export const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState: USER_INITIAL_STATE,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = null;
    },
    signInFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    signUpFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    signOutFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const userReducerOld = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
