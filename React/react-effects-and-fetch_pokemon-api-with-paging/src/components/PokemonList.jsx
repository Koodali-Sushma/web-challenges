import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        // Fetch the dynamic url state instead of a hardcoded string
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  return (
    <main>
      <button type="button" disabled={!prevUrl} onClick={() => setUrl(prevUrl)}>
        Previous Page
      </button>
      <button
        type="button"
        disabled={!nextUrl}
        onClick={() => {
          setUrl(nextUrl);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
