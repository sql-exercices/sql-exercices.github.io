import { Exo_interface } from "./exos";

export const exo_boulangerie: Exo_interface = {
  name: "Boulangerie",
  description: (
    <div>
      Base de données d'une chaîne de boulangeries.<br /><br />
      <b>Boulangeries</b> : les différentes boulangeries (nom, ville, nombre d'employés).<br />
      <b>Pâtisseries</b> : les produits vendus (nom, prix en euros, calories).<br />
      <b>Clients</b> : les clients enregistrés (nom, prénom, ville).<br />
      <b>Commandes</b> : les achats effectués (client, boulangerie, pâtisserie, quantité, date).
    </div>
  ),
  db_url: "boulangerie.sql",
  diagram: "6962cb2cd6e030a024a929d6",
  questions: [
    "Afficher le nom et la ville de chaque boulangerie.",
    "Afficher les pâtisseries coûtant moins de 3 euros.",
    "Afficher les pâtisseries triées par calories décroissantes.",
    "Afficher les clients habitant à Paris.",
    "Afficher les boulangeries ayant plus de 5 employés.",
  ],
  answers: [
    "SELECT nom, ville FROM boulangeries",
    "SELECT nom, prix FROM patisseries WHERE prix < 3",
    "SELECT nom, calories FROM patisseries ORDER BY calories DESC",
    "SELECT nom, prenom FROM clients WHERE ville = 'Paris'",
    "SELECT nom, employes FROM boulangeries WHERE employes > 5",
  ],
};

export const exo_boulangerie_join: Exo_interface = {
  ...exo_boulangerie,
  name: "Boulangerie",
  questions: [
    "Afficher le prénom du client et le nom de la pâtisserie pour chaque commande.",
    "Afficher les commandes passées dans des boulangeries de Paris (nom du client, nom de la boulangerie).",
    "Afficher le nom des clients ayant commandé des croissants.",
    "Afficher le nom des pâtisseries commandées à la boulangerie 'Au Pain Doré'.",
    "Afficher les clients ayant commandé dans une boulangerie de leur propre ville.",
    "Afficher le nom du client, la pâtisserie et le prix total (prix × quantité) pour chaque commande.",
    "Afficher les pâtisseries jamais commandées.",
    "Afficher le nom des clients ayant commandé des pâtisseries à plus de 400 calories.",
  ],
  answers: [
    "SELECT cl.prenom, p.nom FROM commandes co JOIN clients cl ON co.client_id = cl.id JOIN patisseries p ON co.patisserie_id = p.id",
    "SELECT cl.nom, b.nom FROM commandes co JOIN clients cl ON co.client_id = cl.id JOIN boulangeries b ON co.boulangerie_id = b.id WHERE b.ville = 'Paris'",
    "SELECT DISTINCT cl.nom FROM commandes co JOIN clients cl ON co.client_id = cl.id JOIN patisseries p ON co.patisserie_id = p.id WHERE p.nom = 'Croissant'",
    "SELECT DISTINCT p.nom FROM commandes co JOIN boulangeries b ON co.boulangerie_id = b.id JOIN patisseries p ON co.patisserie_id = p.id WHERE b.nom = 'Au Pain Doré'",
    "SELECT DISTINCT cl.nom, cl.prenom FROM commandes co JOIN clients cl ON co.client_id = cl.id JOIN boulangeries b ON co.boulangerie_id = b.id WHERE cl.ville = b.ville",
    "SELECT cl.nom, p.nom, p.prix * co.quantite AS total FROM commandes co JOIN clients cl ON co.client_id = cl.id JOIN patisseries p ON co.patisserie_id = p.id",
    "SELECT p.nom FROM patisseries p LEFT JOIN commandes co ON p.id = co.patisserie_id WHERE co.id IS NULL",
    "SELECT DISTINCT cl.nom FROM commandes co JOIN clients cl ON co.client_id = cl.id JOIN patisseries p ON co.patisserie_id = p.id WHERE p.calories > 400",
  ],
};

export const exo_boulangerie_group: Exo_interface = {
  ...exo_boulangerie,
  name: "Boulangerie",
  questions: [
    "Afficher le nombre de boulangeries par ville.",
    "Afficher le nombre total de commandes par client (nom du client et nombre de commandes).",
    "Afficher le chiffre d'affaires total par boulangerie (nom et total).",
    "Afficher la pâtisserie la plus commandée (nom et quantité totale).",
    "Afficher le nombre de calories moyen des pâtisseries commandées par chaque client.",
    "Afficher les villes ayant au moins 2 boulangeries.",
  ],
  answers: [
    "SELECT ville, COUNT(*) AS nb FROM boulangeries GROUP BY ville",
    "SELECT cl.nom, COUNT(*) AS nb_commandes FROM commandes co JOIN clients cl ON co.client_id = cl.id GROUP BY cl.id, cl.nom",
    "SELECT b.nom, SUM(p.prix * co.quantite) AS total FROM commandes co JOIN boulangeries b ON co.boulangerie_id = b.id JOIN patisseries p ON co.patisserie_id = p.id GROUP BY b.id, b.nom",
    "SELECT p.nom, SUM(co.quantite) AS total FROM commandes co JOIN patisseries p ON co.patisserie_id = p.id GROUP BY p.id, p.nom ORDER BY total DESC LIMIT 1",
    "SELECT cl.nom, AVG(p.calories) AS calories_moy FROM commandes co JOIN clients cl ON co.client_id = cl.id JOIN patisseries p ON co.patisserie_id = p.id GROUP BY cl.id, cl.nom",
    "SELECT ville, COUNT(*) AS nb FROM boulangeries GROUP BY ville HAVING COUNT(*) >= 2",
  ],
};
