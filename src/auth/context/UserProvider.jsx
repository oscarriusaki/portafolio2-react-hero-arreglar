import React, { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './authContext';
import { authReducer } from './authReducer';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user')) || ''
  return {
    logged:!!user,
    user: user
  }
}

export const UserProvider = ({children}) => {

  const [state, dispatch] = useReducer(authReducer, {}, init);
  
  const login = (name = '', email = '', pas = '', token ='') => {
    const user = {
      id: 1234,
      name: name,
      email:email,
      pas: pas,
      token:token
    }
    const action = {
      types: types.login,
      user:user,
    }
    localStorage.setItem('user',JSON.stringify(user))
    dispatch(action)
  }
  
  const logout = () => {
    const action = {
      types: types.logout,
    }
    localStorage.removeItem('user');
    dispatch(action);
  }
  const register = (name = '', email = '', pas = '', token = '') => {
    const user = {
      id:12345,
      name:name,
      email:email,
      pas:pas,
      token: token,
    }
    const action = {
      types: types.register,
      user:user,
    }
    localStorage.setItem("user",JSON.stringify(user))
    dispatch(action);
  }
  return (
    <AuthContext.Provider value = {{
      ...state,
      login,
      logout,
      register,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
