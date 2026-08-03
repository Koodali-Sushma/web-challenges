import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function Character() {
  const { id, setId } = useState(0);

  const {
    data: character,
    isLoading,
    error,
  } = useSWR(`https://swapi.py4e.com/api/people/1`, fetcher);
  console.log("character data:", character);
  if (isLoading) {
    return <h1>Loading......</h1>;
  }
  if (error) return <h1>failed to load!!!</h1>;
  return (
    <Layout>
      <Card
        id={character.id}
        name={character.name}
        height={character.height}
        eyeColor={character.eyeColor}
        birthYear={character.birthYear}
      />
    </Layout>
  );
}
