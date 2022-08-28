export const exo_pokemon = {
  name: "Pokémon",
  db_url:
    "https://raw.githubusercontent.com/mp2i-info/mp2i-info.github.io/main/files/A_sql/pokemon/pokemon.sql",
  diagram_url:
    "https://raw.githubusercontent.com/cpge-itc/itc2/main/files/1_sql/pokemon.png",
  questions: [
    "Calculer le nombre de pokémons.",
    "Afficher les pokémons détenus par Pierre",
  ],
  answers: [
    "SELECT count(*) FROM pokemons;",
    "SELECT pokemons.nom FROM pokemons JOIN detient_pokemons ON pokemons.id = pokemon_id JOIN dresseurs ON dresseurs.id = dresseur_id",
  ],
};
