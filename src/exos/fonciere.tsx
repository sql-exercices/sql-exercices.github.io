import React from "react";
import { Exo_interface } from "./exos";

export const exo_fonciere: Exo_interface = {
  name: "Valeur foncière (une seule table)",
  diagram: (
    <img
      src="https://raw.githubusercontent.com/fortierq/notebooks/master/nb/db/fonciere/fonciere.png"
      width="290"
    ></img>
  ),
  db_url:
    "https://raw.githubusercontent.com/fortierq/notebooks/master/nb/db/fonciere/fonciere.sql",
  description: (
    <div>
      Informations sur les ventes immobilières en 2021. La{" "}
      <b>valeur foncière</b> est l'estimation de la valeur d'un terrain.{" "}
      <br></br>
      <a href="https://cadastre.data.gouv.fr/dvf">Source : data.gouv.</a>
    </div>
  ),
  questions: ["Quel est le nombre moyen de m2 du bâti ?"],
  answers: [
    "select avg(surface_reelle_bati) as 'nombre moyen de m2 du bâti' from fonciere;",
  ],
};
