import { Exo_interface } from "./exos";

export const exo_concours: Exo_interface = {
  name: "Concours",
  description: (
    <div>Base de données contenant les pokémons de la 1ère génération.</div>
  ),
  db_url:
    "https://raw.githubusercontent.com/fortierq/datasets/main/concours/concours.sql",
  diagram: "62853fe17f945876b6459548",
  questions: [
    "Donner le coefficient total des mathématiques à ccinp.", 
    "Donner le coefficient total des mathématiques à ccinp, en pourcentage.", 
  ],
  answers: [
    "SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND matiere='mathématiques';",
    "SELECT(SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND matiere='mathématiques')/(SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id);"
  ],
};
