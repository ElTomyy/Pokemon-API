import { useState, useEffect, useMemo } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon/";

export function useGetPokemons({ size }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const rawData = [];
    setLoading(true)

      const getData = async () => {
        for (let i = size; i < size + 20; i++) {
          const Fetch = await fetch(URL + i);
          const json = await Fetch.json();
          rawData.push({
            name: json.species.name,
            image: json.sprites.front_default,
          });
        }

        setLoading(false)
        setData((lastData) => [...lastData, ...rawData]);
      };

      getData();

  }, [size]);

  return { data, loading }
}