import React from 'react'
import { HeroList } from '../components/HeroList'

export const MarvelPage = () => {
  return (
    <>
      <h1 className='text-4xl font-bold'>Marvel Page</h1>
      <hr />
      <HeroList publisher={'Marvel Comics'} />
    </>
  )
}
