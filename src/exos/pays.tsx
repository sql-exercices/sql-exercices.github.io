import { Exo_interface } from "./exos";

export const exo_pays: Exo_interface = {
  name: "Pays",
  description: (
    <div>Base de données contenant les pays du monde.</div>
  ),
  db_url:
    "https://raw.githubusercontent.com/fortierq/datasets/main/pays/pays.sql",
  diagram: "642c778b5758ac5f1726bc6c",
  questions: [
    "Afficher tous les noms de pays.",
    "Afficher les noms et la population des pays ayant au moins 100 millions d'habitants.",
  ],
  answers: [
    "SELECT nom FROM pays",
    "SELECT nom, population FROM pays WHERE population >= 100000000",
  ],
};
