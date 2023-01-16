import React, { useEffect, useState } from 'react'

export const getHeroByPublisher2 = (publisher = '') => {

    const [heroe, setHeroe] = useState(null)

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
        setHeroe(data);
    }    
    useEffect(() => {
        if(publisher === 'Marvel Comics'){
            getMarvel('Marvel');
          }else{
            getMarvel('DC');
          }
    }, [])
    
  return {
    getMarvel,
    heroe
  }
}
