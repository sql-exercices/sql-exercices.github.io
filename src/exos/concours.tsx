import { Exo_interface } from "./exos";

export const exo_concours_plusieurs: Exo_interface = {
  name: "Concours",
  description: (
    <div>Statistiques partielles sur les concours des écoles d'ingénieurs en 2022. <br /> <a href="https://www.scei-concours.fr/statistiques.php">Source : SCEI</a>. </div>
  ),
  db_url:
    "https://raw.githubusercontent.com/fortierq/datasets/main/concours/concours.sql",
  diagram: "642ec2708615191cfa8bf1a2",
  questions: [
    "Afficher les noms des concours dans la base de données.",
    "Afficher les épreuves à l'écrit de cmp (Concours Mines-Ponts) : filière, matière, durée et coefficient.",
    "Donner le coefficient total des mathématiques au concours ccinp.", 
    "Donner le coefficient des mathématiques au concours ccinp, en pourcentage.", 
  ],
  answers: [
    "SELECT nom FROM concours;",
    "SELECT filiere, matiere, duree, coefficient FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE NOT oral",
    "SELECT SUM(coefficient) as 'Coefficient des mathématiques' FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND matiere='mathématiques';",
    "SELECT(SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND matiere='mathématiques')/(SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id) as 'Pourcentage mathématiques';"
  ],
};

export const exo_concours_group = {
    ...exo_concours_plusieurs, 
    questions: [
        "Donner le nombre d'épreuves pour chaque concours.",
    ],
    answers: [
        "SELECT concours.nom, COUNT(*) as 'Nombre d\'épreuves' FROM epreuve JOIN concours ON concours_id=concours.id GROUP BY concours_id;",
    ],
}