import React from "react";
import { Exo_interface } from "./exos";

export const exo_pokemon: Exo_interface = {
  name: "Pokémon",
  description: (
    <div>Base de données contenant les pokémons de la 1ère génération.</div>
  ),
  db_url:
    "https://raw.githubusercontent.com/mp2i-info/mp2i-info.github.io/main/files/A_sql/pokemon/pokemon.sql",
  diagram: "62853fe17f945876b6459548",
  questions: [
    "Calculer le nombre de pokémons.",
    "Afficher le nom de chaque pokémon avec son niveau d'évolution.",
    "Afficher les pokémons détenus par Pierre.",
    "Afficher le nom de chaque attaque avec son type.",
    "Afficher chaque dresseur avec chacun de ses pokémons.",
    "Afficher chaque pokémon avec son évolution et son niveau d'évolution.",
    "Afficher chaque dresseur avec son nombre de pokémons et leur niveau moyen",
    "Afficher les dresseurs qui possèdent au moins 4 pokémons de niveau au moins 30"
  ],
  answers: [
    "SELECT count(*) FROM pokemons;",
    "select nom, niveau from evolue_en join pokemons on id = pokemon_base_id",
    "SELECT pokemons.nom FROM pokemons JOIN detient_pokemons ON pokemons.id = pokemon_id JOIN dresseurs ON dresseurs.id = dresseur_id WHERE dresseurs.nom = 'Pierre'",
    "select types.libelle, attaques.libelle from types join attaques on types.id = type_id",
    "select dresseurs.nom, pokemons.nom from pokemons join detient_pokemons on pokemons.id = pokemon_id join dresseurs on dresseurs.id = dresseur_id",
    "select pokemons.nom, pokemons_evol.nom, niveau from evolue_en join pokemons on pokemon_base_id = pokemons.id join pokemons as pokemons_evol on pokemon_evol_id = pokemons_evol.id",
    "select nom, count(*) as nombre_pokemons, avg(niveau) as niveau_moyen from dresseurs join detient_pokemons on id = dresseur_id group by nom",
    "select nom, count(*) from dresseurs join detient_pokemons on id = dresseur_id where niveau >= 50 group by nom having count(*) > 3"
  ],
};
