import React, { useEffect, useState } from 'react';
import { getHeroByPublisher } from '../helpers/getHeroByPublisher';
import { getHeroByPublisher2 } from '../helpers/getHeroByPublisher2';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const [hero, setHero] = useState(null)

    const getMarvel = async () => {
      var publisher2 = ''
      if(publisher === 'Marvel Comics'){
          publisher2 = 'Marvel';
      }else{
          publisher2 = 'DC';
      }
      const p = ["DC","Marvel"]
      if(!p.includes(publisher2))
          throw new Error(`No hero with ${publisher}`)
      const url = `http://localhost:8080/hero/publisher/${publisher2}`;
      const method = 'GET';
      const headers = {
          "Content-Type":"application/json",
      }
      const resp = await fetch(url,{
          method: method,
          headers: headers,
      });
      const data = await resp.json();
      setHero(data);
    }

    useEffect(() => {
      getMarvel();
    }, [])
    
    if(hero)
    {
      if(hero.msg !== 'No hero found')
      {
        return (
          <div className='flex flex-wrap 
                          sm:grid sm:grid-cols-2 sm: gap-2 sm:py-2
                          md:grid md:grid-cols-3 md: gap-2 md:py-2
                          lg:grid lg:grid-cols-4 lg: gap-2 lg:py-2
            '>
              {
                (hero.length != 0) 
                ?(  hero.map(hero => (
                      <HeroCard key={hero.id_hero} {...hero}>{hero.superhero}</HeroCard>
                  ))
                )
                : (<p>Noo</p>)
              }
          </div>
        )
      }else{
        return (
          <>
            <p className='text-xl bg-blue-900 border-2 border-blue-800 rounded-md py-3 font-semibold text-white text-center'>No hero Found</p>
          </>
        )
      }
    }else{
      return (
        <p>Loading...</p>
      )
    }
}
