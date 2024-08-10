import { useState, useEffect, useRef } from "react";
import { useGetFilteredPokemons } from "./useGetFilteredPokemons";

export function useGetPokemons({ size, newFilter }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const { names } = useGetFilteredPokemons({ filter: newFilter })
  const lastFilter = useRef(names)

  const URL = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const rawData = [];
    setLoading(true)

    if(newFilter && size < 2 ){
      setData([])
    }

    const getData = async () => {
      for (let i = size; i < size + 20; i++) {
        if (newFilter && lastFilter && newFilter != "All") {
          const Fetch = await fetch(URL + names[i].name);
          const json = await Fetch.json(); 
          rawData.push({
            name: json.species.name,
            image: json.sprites.front_default,
            id: json.id,
          });
        }
        else {
          const Fetch = await fetch(URL + i);
          const json = await Fetch.json();
          rawData.push({
            name: json.species.name,
            image: json.sprites.front_default,
            id: json.id,
          });
        }
      }

      setLoading(false)
      setData((lastData) => [...lastData, ...rawData]);
    };

    getData();

  }, [size, names]);

  return { data, loading }
}