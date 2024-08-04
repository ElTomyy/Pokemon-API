import { useState, useEffect } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon/";

export function useGetPokemons({size}) {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const rawData = [];
  
      const getData = async () => {
        console.log(`New Fetch, start size: ${size}`);
        for (let i = size; i < size + 20; i++) {
          const dataFetch = await fetch(URL + i);
          const depuredData = await dataFetch.json();
          rawData.push({
            name: depuredData.species.name,
            image: depuredData.sprites.front_default,
          });
        }
  
        setData((lastData) => [...lastData, ...rawData]);
      };
  
      getData();
    }, [size]);
  
    return {data}
  }