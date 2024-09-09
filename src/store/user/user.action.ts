import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { UserData } from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; Password: string } | undefined
>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  any
>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: any }
>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  any
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  any
>;

export const checkUserSession = withMatcher((): CheckUserSession => {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
});

export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
});

export const googleSignInStart = withMatcher((): GoogleSignInStart => {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
});

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
      email,
      password,
    } as any),
);

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
  },
);

export const signInFailed = withMatcher((error: any): SignInFailed => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
});

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    });
  },
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: any): SignUpSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
      user,
      additionalDetails,
    });
  },
);

export const signUpFailed = withMatcher((error: any): SignUpFailed => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
});

export const signOutStart = withMatcher((): SignOutStart => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
});

export const signOutSuccess = withMatcher((): SignOutSuccess => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
});

export const signOutFailed = withMatcher((error: any): SignOutFailed => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
});
