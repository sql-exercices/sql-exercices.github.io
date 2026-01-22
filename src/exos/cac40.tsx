import { Exo_interface } from "./exos";

export const exo_cac40: Exo_interface = {
  name: "CAC 40",
  description: (
    <div>
      Base de données contenant les entreprises du CAC 40 et leurs données financières historiques (2020-2024).<br /><br />
      La <b>marge nette</b> = bénéfice net / chiffre d'affaires × 100 (en %).<br />
      Le <b>ratio dette/capitaux propres</b> mesure l'endettement de l'entreprise.<br /><br />
      <a href="https://www.boursorama.com">Source : données publiques des entreprises</a>.
    </div>
  ),
  db_url: "cac40.sql",
  diagram: "678123456789abcdef012345",
  questions: [
    "Afficher le nom et le secteur de chaque entreprise du CAC 40.",
    "Afficher les entreprises du secteur 'Luxe'.",
    "Afficher le chiffre d'affaires total de toutes les entreprises du CAC 40 en 2023, en milliards d'euros.",
    "Afficher les 5 entreprises ayant réalisé le plus gros bénéfice net en 2023.",
    "Afficher le nom et la marge nette (bénéfice/chiffre d'affaires × 100) des entreprises en 2023, triées par marge décroissante. Limiter aux 10 premières.",
    "Afficher les entreprises dont le bénéfice a augmenté entre 2022 et 2023.",
    "Afficher le chiffre d'affaires moyen par secteur en 2023, trié par chiffre d'affaires décroissant.",
    "Afficher les entreprises dont la dette dépasse les capitaux propres en 2023.",
    "Afficher l'évolution du bénéfice total du CAC 40 par année.",
  ],
  answers: [
    "SELECT nom, secteur FROM entreprises",
    "SELECT nom FROM entreprises WHERE secteur = 'Luxe'",
    "SELECT SUM(chiffre_affaires) / 1000 AS ca_milliards FROM finances WHERE annee = 2023",
    "SELECT e.nom, f.benefice_net FROM entreprises e JOIN finances f ON e.id = f.entreprise_id WHERE f.annee = 2023 ORDER BY f.benefice_net DESC LIMIT 5",
    "SELECT e.nom, (f.benefice_net * 100.0 / f.chiffre_affaires) AS marge_nette FROM entreprises e JOIN finances f ON e.id = f.entreprise_id WHERE f.annee = 2023 ORDER BY marge_nette DESC LIMIT 10",
    "SELECT e.nom FROM entreprises e JOIN finances f22 ON e.id = f22.entreprise_id JOIN finances f23 ON e.id = f23.entreprise_id WHERE f22.annee = 2022 AND f23.annee = 2023 AND f23.benefice_net > f22.benefice_net",
    "SELECT e.secteur, AVG(f.chiffre_affaires) AS ca_moyen FROM entreprises e JOIN finances f ON e.id = f.entreprise_id WHERE f.annee = 2023 GROUP BY e.secteur ORDER BY ca_moyen DESC",
    "SELECT e.nom, f.dette, f.capitaux_propres FROM entreprises e JOIN finances f ON e.id = f.entreprise_id WHERE f.annee = 2023 AND f.dette > f.capitaux_propres",
    "SELECT annee, SUM(benefice_net) AS benefice_total FROM finances GROUP BY annee ORDER BY annee",
  ],
};

export const exo_cac40_group: Exo_interface = {
  ...exo_cac40,
  questions: [
    "Afficher le nombre d'entreprises par secteur.",
    "Afficher le secteur ayant généré le plus de bénéfices cumulés sur 2020-2024.",
    "Afficher les entreprises ayant eu un bénéfice positif chaque année de 2020 à 2024.",
    "Afficher le ratio moyen dette/capitaux propres par secteur en 2023, trié par ratio décroissant.",
  ],
  answers: [
    "SELECT secteur, COUNT(*) AS nb_entreprises FROM entreprises GROUP BY secteur",
    "SELECT e.secteur, SUM(f.benefice_net) AS benefice_total FROM entreprises e JOIN finances f ON e.id = f.entreprise_id GROUP BY e.secteur ORDER BY benefice_total DESC LIMIT 1",
    "SELECT e.nom FROM entreprises e JOIN finances f ON e.id = f.entreprise_id WHERE f.benefice_net > 0 GROUP BY e.nom HAVING COUNT(*) = 5",
    "SELECT e.secteur, AVG(f.dette * 1.0 / f.capitaux_propres) AS ratio_dette FROM entreprises e JOIN finances f ON e.id = f.entreprise_id WHERE f.annee = 2023 AND f.capitaux_propres > 0 GROUP BY e.secteur ORDER BY ratio_dette DESC",
  ],
};
