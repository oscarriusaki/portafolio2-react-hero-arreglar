import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { registerWithEmailPassword } from '../../store/auth/thunks';
import { AuthContext } from '../context/authContext';

export const RegisterUserPage = () => {

  const navigate = useNavigate();

  const {name, email, password, onChange} = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [sw, setSw] = useState({
    v1: false,
    v2: false,
    v3: false,
    msg:'',
  });
  const { register } = useContext(AuthContext);
  const dispatch = useDispatch();

  const onRegister = async () => {

    dispatch(registerWithEmailPassword({name,email,password}))
    /* const url = 'http://localhost:8080/user';
    const method = 'POST';
    const headers = {"Context-Type":"application/json"}
    const formData = new FormData();
    formData.append('first_name' ,name)
    formData.append('email' ,email)
    formData.append('pas' ,password)

    const resp = await fetch(url, {
      method: method,
      headers: headers,
      body: formData,
    });
    const data = await resp.json();
    if(data.msg === 'successfully registered' && data.token){
      console.log(data)
      register(data.user.first_name, data.user.email, data.user.pas, data.token)
      navigate('/',{
        replace: true,
      });
    }else{
      setSw({
        ...sw,
        msg: data.msg
      })
      console.log(data)
    } */
  }
  const onLogin = () => {
    navigate('/login',{
      replace: true,
    })
  }
  const onInputSubmit = (value) => {
    value.preventDefault();
    if(email.trim().length === 0 && email.trim().length === 0 && email.trim().length === 0 ){
      setSw({
        ...sw,
        v1: name.trim().length === 0,
        v2: email.trim().length === 0,
        v3: password.trim().length === 0,
        msg: 'put the dates'
      })
      return;
    }else{
      if(name.trim().length === 0){
        setSw({
          ...sw,
          v1: name.trim().length === 0,
          v2: email.trim().length === 0,
          v3: password.trim().length === 0,
          msg: 'put the name'
        })
        return
      }
      if(email.trim().length === 0){
        setSw({
          ...sw,
          v1: name.trim().length === 0,
          v2: email.trim().length === 0,
          v3: password.trim().length === 0,
          msg: 'put the email'
        })
        return
      }
      if(password.trim().length === 0){
        setSw({
          ...sw,
          v1: name.trim().length === 0,
          v2: email.trim().length === 0,
          v3: password.trim().length === 0,
          msg: 'put the password'
        })
        return
      }
    }
    onRegister()
  }
  useEffect(() => {
    setSw({
      ...sw,
      v1:false,
      msg: ''
    })
  }, [name])
  useEffect(() => {
    setSw({
      ...sw,
      v2:false,
      msg: ''
    })
  }, [email])
  useEffect(() => {
    setSw({
      ...sw,
      v3:false,
      msg: ''
    })
  }, [password])
  
  return (
    <>
      <div className='flex flex-wrap justify-center items-center w-full h-screen'>
        <div className='w-50'>
          <div className='w-full'>
            <h1 className='text-4xl font-bold mb-2 text-center'>Register User</h1>
          </div>
          <form className='w-full' onSubmit={onInputSubmit}>
          <input 
            type="text" 
            placeholder='Name'
            className={`${sw.v1 && 'border-x border-y border-red-500'} h-12 bg-neutral-200 rounded-md w-full mb-2 px-2 placeholder:text-xl text-xl focus:outline-none`}
            name='name'
            value={name}
            onChange={onChange}
            />
          <input 
            type="email" 
            placeholder='Email'
            className={`${sw.v2 && 'border-x border-y border-red-500'} h-12 bg-neutral-200 rounded-md w-full mb-2 px-2 placeholder:text-xl text-xl focus:outline-none`}
            name='email'
            value={email}
            onChange={onChange}
            />
          <input 
            type="password" 
            placeholder='Password'
            className={`${sw.v3 && 'border-x border-y border-red-500'} h-12 bg-neutral-200 rounded-md w-full mb-2 px-2 placeholder:text-xl text-xl focus:outline-none`}
            name='password'
            value={password}
            onChange={onChange}
            autoComplete="off"
            />
          <button className='bg-gray-800 text-xl focus:outline-none rounded-md px-3 pt-2 pb-3 font-bold w-full focus:bg-gray-700 text-white'>Register</button>
          <div className='w-full text-center'>
          <span className='px-3 py-2 text-state-500' onClick={onLogin}>have account?/<span className='text-blue-500 hover:underline hover:underline-offset-2 cursor-pointer'>login</span></span>
            <div className='h-1'>
              {
                (sw.msg.length !== 0) && (<span className='text-red-500'>{sw.msg}</span>) 
              }
            </div>
          </div>
          </form>
        </div>
      </div>
    </>  
  )
}
