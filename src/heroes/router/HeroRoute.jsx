import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../mui/components/Navbar'
import { DcPage, HeroPage, MarvelPage, RegisterHero, SearchHeroPage } from '../pages'

export const HeroRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<MarvelPage /> } />
          <Route path='/dc' element={<DcPage /> } />
          <Route path='/hero/:id' element={<HeroPage /> } />
          <Route path='/search' element={<SearchHeroPage /> } />
          <Route path='/registerHero' element={<RegisterHero /> } />
      </Routes>
    </>
  )
}
