import React from "react";
import { Exo_interface } from "./exos";

export const exo_pays: Exo_interface = {
  name: "Pays",
  description: (
    <div>Base de données contenant les pays du monde.</div>
  ),
  db_url:
    "https://raw.githubusercontent.com/cpge-exercices/sql/main/db/pays.sql",
  diagram: "642c778b5758ac5f1726bc6c",
  questions: [
    "Afficher tous les noms de pays.",
  ],
  answers: [
    "SELECT nom FROM pays"
  ],
};
