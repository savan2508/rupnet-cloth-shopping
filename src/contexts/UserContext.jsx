import { createContext, useEffect, useReducer } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// export const UserProvider = ({ children }) => {
//   // const [currentUser, setCurrentUser] = useState(null);
//   const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
//
//   const { currentUser } = state;
//
//   const setCurrentUser = (user) => {
//     dispatch({
//       type: USER_ACTION_TYPES.SET_CURRENT_USER,
//       payload: user,
//     });
//   };
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// const value = { currentUser, setCurrentUser };
