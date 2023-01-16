import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '../auth/context/UserProvider';
import { LoginPage, RegisterUserPage } from '../auth/pages';
import { HeroRoute } from '../heroes/router/HeroRoute';
import { logout } from '../store/auth/authSlice';
import { loginWithEmailPassword, validarToken } from '../store/auth/thunks';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoutel';

export const AppRoutes = () => {
  
  const { status } = useSelector(state => state.auth)

  const dispatch = useDispatch();
  const [sw, setSw] = useState(false)

  useEffect(() => {
    verificar()
  }, []);

  const verificar = async () => {
    const toke = localStorage.getItem('token') || '';
    if(toke.trim().length >= 0){

      const url = 'http://localhost:8080/login/validar';
      const method = 'GET';
      const headers = {
        "context-type":"application/json",
        "x-token":toke
      }
      const resp = await fetch(url, {
        method: method,
        headers: headers,
      })
      const data = await resp.json();
      if(data.msg && !data.token){
        const u = {
          message_error: 'no logged'
        }
        dispatch(logout(u))
      }else{
        dispatch(validarToken(data))
        setSw(true)
      }
    }
  }
    return (
      <UserProvider>
          <Routes>

              <Route path='/login' element={<PublicRoute>
                <LoginPage />
              </PublicRoute> } />
              <Route path='/register' element={<PublicRoute>
                <RegisterUserPage />
              </PublicRoute> } />
              <Route path='/*' element={<PrivateRoute>
                <HeroRoute />
              </PrivateRoute> } />

          </Routes>
      </UserProvider>
    )
}
