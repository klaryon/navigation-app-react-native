import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// Define how it looks, and what information I will have
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Initial State
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// We will use it to tell React how it looks and what does the Context displays
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

// Create Context
export const AuthContext = createContext({} as AuthContextProps);

// Component provider of state
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn
      }}>
      {children}
    </AuthContext.Provider>
  );
};
