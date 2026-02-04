import { Exo_interface } from "./exos";

export const exo_pays: Exo_interface = {
  name: "Pays",
  description: (
    <div>Base de données contenant les pays du monde et leurs populations en 2015.<br /><br />
    <code>croissance_population</code>, <code>taux_naissance</code>, <code>taux_deces</code> et <code>taux_migration</code> sont en pourcentage (si <code>croissance_population</code> vaut 2% alors la population a augmenté de 2% durant l'année).<br /><br />
    <a href="https://www.cia.gov/the-world-factbook">Source : CIA</a>.</div>
  ),
  db_url:
    "https://raw.githubusercontent.com/fortierq/datasets/main/pays/pays.sql",
  diagram: "642c778b5758ac5f1726bc6c/6983a1b9bd82f5fce2abfb46",
  questions: [
    "Afficher le nom, la population et la surface de chaque pays.",
    "Afficher le nom et la population des pays ayant moins de 2000 d'habitants.",
    "Afficher les pays dont le taux de naissance est inférieur au taux de décès.",
    "Afficher la population totale sur Terre, en milliards. On pourra diviser par 1e9.",
    "Afficher le nombre total de naissances sur Terre en 2015, en milliards.",
    "Afficher les 10 pays de plus de 5 millions d'habitants ayant eu le plus fort taux de migration. On affichera aussi le taux de migration.",
    "Afficher les 10 pays d'au moins 5 millions d'habitants ayant la plus forte densité de population. On affichera aussi la densité.",
  ],
  answers: [
    "SELECT nom, population, surface FROM pays",
    "SELECT nom, population FROM pays WHERE population <= 2000",
    "select nom from pays where taux_naissance < taux_deces",
    "select sum(population)/1e9 as 'population totale' from pays",
    "select sum(population*taux_naissance/100.)/1e9 as 'nombre de naissances' from pays",
    "select nom, taux_migration from pays where population > 5e6 order by taux_migration desc limit 10",
    "select nom, population/surface as densité from pays where population > 5e6 order by densité desc limit 10",
  ],
};
