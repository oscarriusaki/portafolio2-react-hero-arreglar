import React from 'react';
import { heroes } from '../data/heroes';

export const getHeroByPublisher = (publisher = '') => {
  const p = ['Marvel Comics', 'DC Comics'];
  if(!p.includes(publisher)){
    throw new Error(`No hero with pubisher ${p}`);
  }
  return (heroes.filter(hero => hero.publisher === publisher));
}
