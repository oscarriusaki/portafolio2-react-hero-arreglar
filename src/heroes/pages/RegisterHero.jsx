import React, { useContext, useEffect, useRef, useState } from 'react';
// import { AuthContext } from '../../auth/context/AuthContext';
import { AuthContext } from '../../auth/context/AuthContext';
 import { useForm } from '../../hooks/useForm';

export const RegisterHero = () => {
  
  const { id, superhero, publisher, alter_ego, first_appearance, characters, img , onChange } = useForm({
    id: '',
    superhero: '',
    publisher: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
    img: '',
  })
  const [value, setValue] = useState({
    v1: false,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
    v6: false,
    v7: false,
    msg: '',
  });
  const refIn = useRef();
  const onInputSubmit = async(val) => {
    val.preventDefault();
    if(id.trim().length <=0 &&
      superhero.trim().length <=0 &&
      publisher.trim().length <=0 &&
      alter_ego.trim().length <=0 &&
      first_appearance.trim().length <=0 &&
      characters.trim().length <=0 &&
      refIn.current.files.length <= 0){
        setValue({
          ...value,
          v1: id.trim().length == 0,
          v2: superhero.trim().length == 0,
          v3: publisher.trim().length == 0,
          v4: alter_ego.trim().length == 0,
          v5: first_appearance.trim().length == 0,
          v6: characters.trim().length == 0,
          v7: refIn.current.files.length == 0,   
          msg: 'need complete the form'
        })
        return;
    }else{
      if(id.trim().length <=0){
        setValue({
          ...value,
          v1: id.trim().length == 0,
          v2: superhero.trim().length == 0,
          v3: publisher.trim().length == 0,
          v4: alter_ego.trim().length == 0,
          v5: first_appearance.trim().length == 0,
          v6: characters.trim().length == 0,
          v7: refIn.current.files.length == 0,   
          msg: 'need complete the id'
        })
        return;
      }else{
        
        if(superhero.trim().length <=0){
          setValue({
            ...value,
            v1: id.trim().length == 0,
            v2: superhero.trim().length == 0,
            v3: publisher.trim().length == 0,
            v4: alter_ego.trim().length == 0,
            v5: first_appearance.trim().length == 0,
            v6: characters.trim().length == 0,
            v7: refIn.current.files.length == 0,   
            msg: 'need complete the superhero'
          })
          return;
        }else{
          if( publisher.trim().length <=0){
            setValue({
              ...value,
              v1: id.trim().length == 0,
              v2: superhero.trim().length == 0,
              v3: publisher.trim().length == 0,
              v4: alter_ego.trim().length == 0,
              v5: first_appearance.trim().length == 0,
              v6: characters.trim().length == 0,
              v7: refIn.current.files.length == 0,   
              msg: 'need complete the publisher'
            })
            return;
          }else{
            if( alter_ego.trim().length <=0){
              setValue({
                ...value,
                v1: id.trim().length == 0,
                v2: superhero.trim().length == 0,
                v3: publisher.trim().length == 0,
                v4: alter_ego.trim().length == 0,
                v5: first_appearance.trim().length == 0,
                v6: characters.trim().length == 0,
                v7: refIn.current.files.length == 0,   
                msg: 'need complete the alter_ego'
              })
              return;
            }else{
              if(first_appearance.trim().length <=0){
                setValue({
                  ...value,
                  v1: id.trim().length == 0,
                  v2: superhero.trim().length == 0,
                  v3: publisher.trim().length == 0,
                  v4: alter_ego.trim().length == 0,
                  v5: first_appearance.trim().length == 0,
                  v6: characters.trim().length == 0,
                  v7: refIn.current.files.length == 0,   
                  msg: 'need complete the first_appearance'
                })
                return;
              }else{
                if(characters.trim().length <=0){
                  setValue({
                    ...value,
                    v1: id.trim().length == 0,
                    v2: superhero.trim().length == 0,
                    v3: publisher.trim().length == 0,
                    v4: alter_ego.trim().length == 0,
                    v5: first_appearance.trim().length == 0,
                    v6: characters.trim().length == 0,
                    v7: refIn.current.files.length == 0,   
                    msg: 'need complete the characters'
                  })
                  return;
                }else{
                  if(refIn.current.files.length <= 0){
                    setValue({
                      ...value,
                      v1: id.trim().length == 0,
                      v2: superhero.trim().length == 0,
                      v3: publisher.trim().length == 0,
                      v4: alter_ego.trim().length == 0,
                      v5: first_appearance.trim().length == 0,
                      v6: characters.trim().length == 0,
                      v7: refIn.current.files.length == 0,   
                      msg: 'need choice a image'
                    })
                    return;
                  } 
                } 
              } 
            } 
          } 
        }
      }
    }
    
    const url = 'http://localhost:8080/hero';
    const method = 'POST';
    const to = localStorage.getItem('token');
    const headers = {
      "x-token": to,
    }
    const formData = new FormData();
    formData.append('idd', id)
    formData.append('superhero', superhero)
    formData.append('publisher', publisher)
    formData.append('alter_ego', alter_ego)
    formData.append('first_appearance', first_appearance)
    formData.append('characterss', characters)
     formData.append('img', refIn.current.files[0])
    const resp = await fetch(url, {
      method: method,
      headers:headers,
      body: formData,
    })
    const data = await resp.json();
  }
  useEffect(() => {
    setValue({
      ...value,
      v1:false,
      msg: '',
    })
  }, [id])
  useEffect(() => {
    setValue({
      ...value,
      v2:false,
      msg: '',
    })
  }, [superhero])
  useEffect(() => {
    setValue({
      ...value,
      v3:false,
      msg: '',
    })
  }, [publisher])
  useEffect(() => {
    setValue({
      ...value,
      v4:false,
      msg: '',
    })
  }, [alter_ego])
  useEffect(() => {
    setValue({
      ...value,
      v5:false,
      msg: '',
    })
  }, [first_appearance])
  useEffect(() => {
    setValue({
      ...value,
      v6:false,
      msg: '',
    })
  }, [characters])
  useEffect(() => {
    setValue({
      ...value,
      v7:false,
      msg: '',
    })
  }, [img])
  
  return (
    <>
      <div className='flex flex-wrap w-full justify-center items-center'>
        <div className='w-50'>
          <div className='w-full'>
            <h1 className='text-center text-3xl font-bold mb-2 text-neutral-900'>Register Hero</h1>
          </div>
          <div className='w-full'>
            <form onSubmit={onInputSubmit}>
              <input 
                type="text" 
                placeholder='id'
                className={`${value.v1 && 'border-red-500'} text-black border-x border-y focus:outline-none focus:border-x focus:border-y focus:border-sky-500 px-2 bg-neutral-200 rounded-md text-xl placeholder:text-xl w-full mb-2 h-12 placeholder:text-neutral-500`}
                name={'id'}
                value={id}
                onChange = {onChange}
                />
              <input 
                type="text" 
                placeholder='superhero'
                className={`${value.v2 && 'border-red-500'} text-black border-x border-y focus:outline-none focus:border-x focus:border-y focus:border-sky-500 px-2 bg-neutral-200 rounded-md text-xl placeholder:text-xl w-full mb-2 h-12 placeholder:text-neutral-500`}
                name={'superhero'}
                value={superhero}
                onChange = {onChange}
                />
              <input 
                type="text" 
                placeholder='publisher'
                className={`${value.v3 && 'border-red-500'} text-black border-x border-y focus:outline-none focus:border-x focus:border-y focus:border-sky-500 px-2 bg-neutral-200 rounded-md text-xl placeholder:text-xl w-full mb-2 h-12 placeholder:text-neutral-500`}
                name={'publisher'}
                value={publisher}
                onChange = {onChange}
                />
              <input 
                type="text" 
                placeholder='alter_ego'
                className={`${value.v4 && 'border-red-500'} text-black border-x border-y focus:outline-none focus:border-x focus:border-y focus:border-sky-500 px-2 bg-neutral-200 rounded-md text-xl placeholder:text-xl w-full mb-2 h-12 placeholder:text-neutral-500`}
                name={'alter_ego'}
                value={alter_ego}
                onChange = {onChange}
                />
              <input 
                type="text" 
                placeholder='first_appearance'
                className={`${value.v5 && 'border-red-500'} text-black border-x border-y focus:outline-none focus:border-x focus:border-y focus:border-sky-500 px-2 bg-neutral-200 rounded-md text-xl placeholder:text-xl w-full mb-2 h-12 placeholder:text-neutral-500`}
                name={'first_appearance'}
                value={first_appearance}
                onChange = {onChange}
                />
              <input 
                type="text" 
                placeholder='characters'
                className={`${value.v6 && 'border-red-500'} text-black border-x border-y focus:outline-none focus:border-x focus:border-y focus:border-sky-500 px-2 bg-neutral-200 rounded-md text-xl placeholder:text-xl w-full mb-2 h-12 placeholder:text-neutral-500`}
                name={'characters'}
                value={characters}
                onChange = {onChange}
                />
              <input 
                type="file" 
                placeholder='img'
                ref={refIn}
                className={`
                    ${value.v7 && 'border-x border-y border-red-500'} 
                    focus:outline-none focus:border-x focus:border-y focus:border-sky-500 
                     bg-neutral-200 text-neutral-900 rounded-md text-white text-state-500
                    w-full mb-2 h-12 
                    file:py-3 file:bg-neutral-800 file:outline-none file:border-none
                    file:rounded-md file:text-violet-500
                    `}
                name={'img'}
                value={img}
                onChange = {onChange}
                />
              <button type='submit' className='w-full mt-4 bg-gray-800 hover:bg-gray-700 h-12 font-bold text-xl focus:outline-none focus:border-x focus:border-y focus:border-gray-700 text-white'>Register</button>
              <div className='w-full text-center'>
                {
                  (value.msg.trim().length !== 0) && (<span className='text-red-500 text-center w-full'>{value.msg}</span>)
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
