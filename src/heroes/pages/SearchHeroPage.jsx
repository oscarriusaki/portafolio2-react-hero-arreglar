import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroCard } from '../components/HeroCard';

export const SearchHeroPage = () => {

  const { searchText , onChange} = useForm({
    searchText: ''
  });

  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const { q = '' } = queryString.parse(search); 
  const [hero, setHero] = useState([]);
  
  const getHeroBy = async() => {

    const url = `http://localhost:8080/hero/name/${q}`;
    const method = 'GET';
    const headers = {
      'Context-type':'application/json'
    }
    const resp = await fetch(url, {
      method:method,
      headers: headers,
    });
    const data = await resp.json();
    setHero(data);
  }

  useEffect(() => {
    getHeroBy()
  }, [q]);
  
  const onInputSubmit = (value) => {
    value.preventDefault();
    // if(searchText.trim().length <= 0) return
    navigate(`?q=${searchText}`)
  }   

  return (
    <>
      <div className='flex w-full 
                      md:grid md:grid-cols-2 md:gap-2 
                      lg:grid lg:grid-cols-2 lg:gap-2 
                      sm:grid sm:grid-cols-2 sm:gap-2
                      grid gap-2'>
        <div className='w-full'>
          <h1 className='text-4xl font-bold py-2 text-white text-center text-neutral-600'>Search Text Hero</h1>
          <form onSubmit={onInputSubmit}>
            <input 
              type="text" 
              placeholder = 'Search Text a hero'
              className = 'w-full bg-gray-200 rounded-md px-2 mb-3 h-10 placeholder:text-neutral-400 focus:outline-none focus:border border-x border-y focus:border-sky-500 placeholder:text-xl'
              name='searchText'
              value={searchText}
              onChange={onChange}
              />
            <button type='submit' className='w-full rounded-md py-2 text-xl font-bold bg-gray-800 hover:bg-gray-700 text-white'>Search</button>
          </form>
        </div>
        <div className='w-full justify-center items-center'>
          <p className='text-4xl font-bold px-3 py-2 text-neutral-900 text-center'>Searching Hero</p>
          {
            (q.length === 0) 
            ? <div className='w-full px-2 border-2 border-blue-700 text-blue-400 py-3 rounded-md bg-blue-900 text-xl text-center font-semibold'>Searching hero</div>
            : (hero.msg === 'hero not found') &&
            <div className='w-full px-2 border-2 border-red-700 py-3 rounded-md bg-red-900 text-red-400 text-xl text-center font-semibold'>No hero with <span className='font-bold'>{q}</span></div>
          }
          {
            (hero.length >= 0) &&(
              hero.map(hero => (
                <HeroCard key={hero.id} {...hero} ></HeroCard>
              ))
            )
          }
        </div>
      </div>
    </>
  )
}
