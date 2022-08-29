import React from "react";
import { Exo_interface } from "./exos";

export const exo_pokemon: Exo_interface = {
  name: "Pokémon",
  description: (
    <div>Base de données contenant les pokémons de la 1ère génération.</div>
  ),
  db_url:
    "https://raw.githubusercontent.com/mp2i-info/mp2i-info.github.io/main/files/A_sql/pokemon/pokemon.sql",
  diagram: (
    <img
      src="https://raw.githubusercontent.com/cpge-itc/itc2/main/files/1_sql/pokemon.png"
      width="80%"
    ></img>
  ),
  questions: [
    "Calculer le nombre de pokémons.",
    "Afficher les pokémons détenus par Pierre.",
  ],
  answers: [
    "SELECT count(*) FROM pokemons;",
    "SELECT pokemons.nom FROM pokemons JOIN detient_pokemons ON pokemons.id = pokemon_id JOIN dresseurs ON dresseurs.id = dresseur_id",
  ],
};
