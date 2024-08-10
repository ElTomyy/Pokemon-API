import { useEffect, useState } from "react";

export function useGetFilteredPokemons({ filter }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const rawData = [];
        setData(null)

        const URL = "https://pokeapi.co/api/v2/type/";

        if (filter != null && filter != "All") {
            const getData = async () => {
                const Fetch = await fetch(URL + filter)
                const json = await Fetch.json()
                const toMap = json.pokemon

                const Pokemons = toMap.map((element) => {
                    rawData.push({ name: element.pokemon.name })
                })

                setData((lastData) => lastData ? [...lastData, ...rawData] : [...rawData])
            }

            getData()
        }

    }, [filter])

    return { names: data }
}