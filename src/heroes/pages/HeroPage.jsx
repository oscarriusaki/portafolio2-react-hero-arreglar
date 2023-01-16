import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {

  const { id } = useParams();
  const [data, setData] = useState(null)
  // const data = getHeroById(id);
  const navigate = useNavigate();
  // if(!data) return

  const getHeroId = async () => {
    const url = `http://localhost:8080/hero/id/${id}`;
    const method = 'GET';
    const headers = {
      'Context-type':'application/json',
    }
    const resp = await fetch(url, {
      method: method,
      headers: headers,
    })
    const data = await resp.json();
    setData(data)

  }

  const back = () =>{
    navigate(-1);
  }
 
  useEffect(() => {
    getHeroId()
  }, [])


  if(data){
    return (
      <>
        <div className='bg-neutral-900 flex w-full 
                        md:grid md:grid-cols-2 md:gap-2 
                        lg:grid lg:grid-cols-2 lg:gap-2 
                        sm:grid sm:grid-cols-2 sm:gap-2
                        grid gap-2'>
          <div className='w-full p-2 '>
            <img src={data.pathimage} alt={data.superhero} className='rounded-md w-full'/>
          </div>
          <div className='w-full p-2'>
            <p> <span className='font-bold'>Superhero: </span>{data.superhero}</p>
            <p> <span className='font-bold'>Publisher: </span>{data.publisher}</p>
            <p> <span className='font-bold'>Alter_ego: </span>{data.alter_ego}</p>
            {
              (data.alter_ego != data.characters) && (<p> <span className='font-bold'> Characters: </span>{data.characters}</p>)
            }
            <p className='text-gray-400'> <span className='font-bold'> First_appearance: </span>{data.first_appearance}</p>
            <button className='mt-2 px-3 py-2 border-x border-y bg-blue-600 rounded-md' onClick={back}>Back</button>
          </div>
        </div>
      </>
    )
  }else{
    return (
      <p>Loading...</p>
    )
  }
  
}
