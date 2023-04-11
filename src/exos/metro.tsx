import { Exo_interface } from "./exos";
import Grid from "@mui/material/Grid";

export const exo_metro: Exo_interface = {
  name: "Métro parisien",
  description: (
    <Grid>
      Cette base de données contient une table <code>metro</code> contenant les
      stations de métro et RER parisiennes. Attributs de la table :
      <ul>
        <li>
          <code>station</code> : nom de la station
        </li>
        <li>
          <code>reseau</code> : <code>'Métro'</code> ou <code>'Rer'</code>
        </li>
        <li>
          <code>trafic</code> : nombre de passagers en 2021
        </li>
        <li>
          <code>ville</code> : ville de la station (exemples :{" "}
          <code>'Paris'</code>)
        </li>
        <li>
          <code>arrondissement</code> : arrondissement de la station (uniquement
          pour Paris)
        </li>
        {/* <li>
          <code>correspondance_1</code> à <code>correspondance_5</code> : lignes
          de métro/RER passant par la station
        </li> */}
      </ul>
      <a href="https://www.data.gouv.fr/fr/datasets/stations-de-metro">Source : data.gouv</a>.
    </Grid>
  ),
  db_url:
    "https://raw.githubusercontent.com/fortierq/datasets/main/metro_paris/metro_paris.sql",
  diagram: "630e18a30911f91ba5f92ffa",
  questions: [
    "Afficher toutes les stations.",
    "Afficher les stations de la ville de Massy.",
    "Afficher les stations de RER du 5ème arrondissement de Paris.",
    "Combien y a-t-il eu de passagers dans la ville de Saint Denis ?",
    "Afficher le nom et la ville de toutes les stations en dehors de Paris avec un trafic supérieur à 10 millions",
    "Afficher la station et le trafic de la station la plus fréquentée.",
    
    // "Afficher chaque arrondissement avec son nombre de stations de métro.",
  ],
  answers: [
    "SELECT station FROM metro",
    "SELECT station FROM metro WHERE ville = 'Massy'",
    "SELECT station FROM metro WHERE arrondissement = 5 AND reseau = 'Rer'",
    "SELECT SUM(trafic) as 'Nombre de passagers' FROM metro WHERE ville = 'Saint Denis'",
    "SELECT station, ville FROM metro WHERE ville != 'Paris' AND trafic > 10000000",
    "SELECT station, trafic FROM metro ORDER BY trafic DESC LIMIT 1",
    // "SELECT arrondissement, COUNT(*) FROM metro GROUP BY arrondissement",
  ],
};
