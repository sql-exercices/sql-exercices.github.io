import { Exo_interface } from "./exos";

export const exo_concours: Exo_interface = {
  name: "Concours",
  description: (
    <div>Statistiques sur les concours des écoles d'ingénieurs en 2022. <br /> <a href="https://www.scei-concours.fr/statistiques.php">Source : SCEI</a>. </div>
  ),
  db_url:
    "https://raw.githubusercontent.com/fortierq/datasets/main/concours/concours.sql",
  diagram: "642ec2708615191cfa8bf1a2",
  questions: [
    "Donner le coefficient total des mathématiques au concours ccinp.", 
    "Donner le coefficient des mathématiques au concours ccinp, en pourcentage.", 
  ],
  answers: [
    "SELECT SUM(coefficient) as 'Coefficient des mathématiques' FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND matiere='mathématiques';",
    "SELECT(SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND matiere='mathématiques')/(SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id) as 'Pourcentage mathématiques';"
  ],
};
