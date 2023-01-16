import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    idd,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characterss,
    pathimage,
    id_hero
}) => {

    // const url = `/assets/heroes/${id}.jpg`

  return (
    <>
        <div className='flex bg-neutral-800'>
            <div className='p-2 w-1/2'>
                <img src={pathimage} alt={superhero} className='rounded-md'/>
            </div>
            <div className='px-2 w-1/2'>
                <p>{superhero}</p>
                <p>{publisher}</p>
                <p>{alter_ego}</p>
                {
                    (alter_ego != characterss) && (<p>{characterss}</p>)
                }
                <p>{first_appearance}</p>
                <Link to={`/hero/${id_hero}`} className='text-blue-400'>Mas...</Link>
            </div>
        </div>
    </>
  )
}
