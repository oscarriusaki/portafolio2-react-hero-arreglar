import React from 'react'
import { HeroList } from '../components/HeroList'

export const DcPage = () => {
  return (
    <>
      <h1 className='text-4xl font-bold'>Dc Page</h1>
      <HeroList publisher={'DC Comics'} />
    </>
  )
}
