import React from "react";
import { Exo_interface } from "./exos";

export const exo_fonciere: Exo_interface = {
  name: "Valeur foncière",
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
      Informations sur une partie des ventes immobilières 2021 en France.{" "}
      <br></br>
      La <b>valeur foncière</b> est l'estimation de la valeur d'un terrain.{" "}
      <br></br>
      Les noms de voie et de commune sont en majuscules.
      <br></br>
      <a href="https://cadastre.data.gouv.fr/dvf">Source : data.gouv</a>.
    </div>
  ),
  questions: ["Quel est le nombre moyen de m2 du bâti ?"],
  answers: [
    "select avg(surface_reelle_bati) as 'nombre moyen de m2 du bâti' from fonciere;",
  ],
};
