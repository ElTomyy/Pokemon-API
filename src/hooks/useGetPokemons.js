import { useState, useEffect, useRef } from "react";
import { useGetFilteredPokemons } from "./useGetFilteredPokemons";

export function useGetPokemons({ size, newFilter, keyword }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const { names } = useGetFilteredPokemons({ filter: newFilter })
  const lastFilter = useRef(names)
  const inputUsed = useRef(false)

  const URL = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const rawData = [];
    setLoading(true);

    if (newFilter && size < 2 && !keyword) {
      setData([]);
    }

    const getData = async () => {
      if (keyword != null && keyword != "") {
        const Fetch = await fetch(URL + keyword);
        const json = await Fetch.json();

        setData([{
          name: json.species.name,
          image: json.sprites.front_default,
          id: json.id,
          hp: json.stats[0].base_stat,
          damage: json.stats[1].base_stat,
          defense: json.stats[2].base_stat,
          speed: json.stats[5].base_stat,
        }])

        inputUsed.current = true;
        setLoading(false)
      }
      else {
        for (let i = size; i < size + 20; i++) {
          if (newFilter && lastFilter && newFilter != "All") {
            const Fetch = await fetch(URL + names[i].name);
            const json = await Fetch.json();
            rawData.push({
              name: json.species.name,
              image: json.sprites.front_default,
              id: json.id,
              hp: json.stats[0].base_stat,
              damage: json.stats[1].base_stat,
              defense: json.stats[2].base_stat,
              speed: json.stats[5].base_stat,
            });
          }
          else {
            const Fetch = await fetch(URL + i);
            const json = await Fetch.json();
            rawData.push({
              name: json.species.name,
              image: json.sprites.front_default,
              id: json.id,
              hp: json.stats[0].base_stat,
              damage: json.stats[1].base_stat,
              defense: json.stats[2].base_stat,
              speed: json.stats[5].base_stat,
            });
          }
        }

        setLoading(false)
        setData((lastData) => [...lastData, ...rawData]);
      }

    };

    getData();

  }, [size, names, keyword]);

  return { data, loading }
}