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
          <code>'Paris'</code>, <code>'Saint-Denis'</code>)
        </li>
        <li>
          <code>arrondissement</code> : arrondissement de la station (uniquement
          pour Paris)
        </li>
        <li>
          <code>correspondance_1</code> à <code>correspondance_5</code> : lignes
          de métro/RER passant par la station
        </li>
      </ul>
    </Grid>
  ),
  db_url:
    "https://raw.githubusercontent.com/fortierq/datasets/main/metro_paris/metro_paris.sql",
  diagram: "630e18a30911f91ba5f92ffa",
  questions: [
    "Afficher toutes les stations de métro.",
    "Afficher la (ou les) station(s) de la ville de Massy.",
    "Afficher la station et le trafic de la station la plus fréquentée.",
    "Afficher chaque arrondissement avec son nombre de stations de métro.",
  ],
  answers: [
    "SELECT DISTINCT station FROM metro;",
    "SELECT station FROM metro WHERE ville = 'Massy'",
    "SELECT station, trafic FROM metro ORDER BY trafic DESC LIMIT 1",
    "SELECT arrondissement, COUNT(*) FROM metro GROUP BY arrondissement",
  ],
};
