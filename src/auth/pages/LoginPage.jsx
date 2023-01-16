import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { loginWithEmailPassword } from '../../store/auth/thunks';
import { AuthContext } from '../context/authContext';

export const LoginPage = () => {

  const navigate = useNavigate(); 
  const { login } = useContext(AuthContext);
  const { state } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const [sw, setSw] = useState({
    v1: false,
    v2: false,
    msg: '',
  })
  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  })

  const onRegister = () => {
    navigate('/register', {
      replace:true
    })
  }
  const onLogin = async() => {
    dispatch(loginWithEmailPassword({email, password}));
  }
  const onInputSubmit = (value) => {
    value.preventDefault()
 
    if(email.trim().length === 0 &&
      password.trim().length === 0 ){
        setSw({
          ...sw,
          v1:email.trim().length === 0 ,
          v2:password.trim().length === 0,
          msg: 'you need put the email and password'
        })
        return
    }else{

      if(email.trim().length === 0) {
        setSw({
          ...sw,
          v1:email.trim().length === 0 ,
          v2:password.trim().length === 0,
          msg: 'put the email'
        })
        return
      };
      if(password.trim().length === 0) {
        setSw({
          ...sw,
          v1:email.trim().length === 0 ,
          v2:password.trim().length === 0,
          msg: 'put the password'
        })
        return
      };
    }
 
    onLogin()
  }

  useEffect(() => {
    setSw({
      ...sw,
      v1:false,
      msg:''
    })
  }, [email])
  useEffect(() => {
    setSw({
      ...sw,
      v2:false,
      msg: ''
    })
  }, [password])
  
  return (
    <>
      <div className='flex flex-wrap justify-center w-full h-screen items-center'>
        <div className='w-50'>
          <div className='w-full'>
            <h1 className='text-4xl font-bold justify-center text-center mb-3 text-neutral-900'>Login User</h1>
          </div>

        <form onSubmit={onInputSubmit} className='w-full'>
          <input 
            type="email" 
            placeholder='Email'
            className={`w-full bg-neutral-200 focus:outline-none rounded-md px-3 py-2 h-12 placeholder:text-xl mb-2 text-xl border-x border-y ${sw.v1 && 'border-x border-y border-red-500'}`}
            name='email'
            value={email}
            onChange={onChange}
            />
          <input 
            type="password" 
            placeholder='Password'
            className={`w-full bg-neutral-200 focus:outline-none rounded-md px-3 py-2 h-12 placeholder:text-xl mb-2 text-xl border-x border-y ${sw.v2 && 'border-x border-y border-red-500'}`}
            name='password'
            value={password}
            onChange={onChange}
            autoComplete='off'
            />
          <button type='submit' className='bg-gray-800 px-3 pt-2 pb-3 rounded-md w-full text-xl text-white font-semibold hover:bg-gray-700 mb-2'>Login</button>
          <div className='text-center justify-center'>
            <span className='rounded-md' onClick={onRegister}>don't have account?/<span className='text-blue-500 cursor-pointer hover:underline hover:underline-offset-2'>register</span></span>
          </div>
          <div className='h-1 text-center w-full'>
            {
              (sw.msg.length !== 0) && ( <span className='text-red-500'>{sw.msg}</span> )
            }
          </div>
        </form>
        </div>
      </div>
    </>
  )
}
