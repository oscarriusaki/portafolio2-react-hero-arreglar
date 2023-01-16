import React from 'react'
import { heroes } from '../data/heroes';

export const getHeroById = (id) => {
    if(id.lenght === 0) return;

    return (heroes.find(hero => hero.id === id))
}
