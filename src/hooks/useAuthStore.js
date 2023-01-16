// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { logout } from '../store/auth/authSlice';
// import { validarToken } from '../store/auth/thunks';

// export const useAuthStore = () => {

//     const { status, first_name, email, token, id } = useSelector(state => state.auth);
//     const dispatch = useDispatch();

//     const startLogin = async ({email, password}) => {

//     }

//     const checktoken = async () => {
//         const token = localStorage.getItem('token');
//         const d = {
//             message_error: 'No logged'
//         }
//         if(!token) return dispatch(logout(d));

//         try{
            
//             const url = 'http://localhost:8080/login/validar';
//             const method = 'GET';
//             const headers = {
//                 "context-type":"application/json",
//                 "x-token":token
//             }
//             const resp = await fetch(url, {
//                 method: method,
//                 headers: headers,
//             })
//             const data = await resp.json();
//             if(data.msg && !data.token){
//                 const u = {
//                 message_error: 'no logged'
//                 }
//                 dispatch(logout(u))
//             }else{
//                 dispatch(validarToken(data))
//             }

//         }catch(err){
//             localStorage.clear()
//             const u = {
//             message_error: 'no logged'
//             }
//             dispatch(logout(u))
//         }

//     }

//   return {
//     status,
//     first_name,
//     email,
//     token,
//     id,

//     checktoken
//   }

// }
