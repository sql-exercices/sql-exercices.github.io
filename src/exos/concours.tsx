import { Exo_interface } from "./exos";

export const exo_concours: Exo_interface = {
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
  ],
  answers: [
    "select distinct nom from concours;",
    "SELECT filiere, matiere, duree, coefficient FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE NOT oral",
    "SELECT SUM(coefficient) as 'coefficient des mathématiques' FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND matiere='mathématiques';",
  ],
};

export const exo_concours_group = {
    ...exo_concours, 
    questions: [
        "Afficher le coefficient total de chaque matière pour la filière mpi du concours ccinp.",
        "Pour chaque concours, afficher le nom, la filière, le nombre d'épreuves écrites et leur durée totale.",
    ],
    answers: [
        "SELECT matiere, SUM(coefficient) as 'coefficient total' FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND filiere = 'mpi' GROUP BY matiere;",
        "SELECT concours.nom, filiere, COUNT(*) as 'nombre d'épreuves', SUM(duree) as 'durée totale' FROM epreuve JOIN concours ON concours_id=concours.id WHERE NOT oral GROUP BY concours_id;",
    ],
}

export const exo_concours_nested = {
    ...exo_concours, 
    questions: [
        "Donner le coefficient des mathématiques au concours ccinp, en pourcentage.", 
    ],
    answers: [
        "SELECT(SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id WHERE concours.nom='ccinp' AND matiere='mathématiques')/(SELECT SUM(coefficient) FROM epreuve JOIN concours ON concours_id=concours.id JOIN epreuve_matiere ON epreuve_id=epreuve.id) as 'pourcentage mathématiques';"
    ],
}