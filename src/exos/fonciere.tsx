import React from "react";

export const exo_fonciere = {
  name: "Valeur foncière",
  diagram_url: (
    <img
      src="https://raw.githubusercontent.com/fortierq/notebooks/master/nb/db/fonciere/fonciere.png"
      width="290"
    ></img>
  ),
  db_url:
    "https://raw.githubusercontent.com/fortierq/notebooks/master/nb/db/fonciere/fonciere.sql",
  description: (
    <div>
      <p>
        La table fonciere contient des informations sur les ventes immobilières
        en 2021. La <b>valeur foncière</b> est l'estimation de la valeur d'un
        terrain.{" "}
        <a href="https://cadastre.data.gouv.fr/dvf">Source sur data.gouv.</a>
      </p>
    </div>
  ),
  questions: ["Quel est le nombre moyen de m2 du bâti ?"],
  answers: [
    "select avg(surface_reelle_bati) as 'nombre moyen de m2 du bâti' from fonciere;",
  ],
};
