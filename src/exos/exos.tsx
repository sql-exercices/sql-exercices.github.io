import { exo_pokemon, exo_pokemon_group } from "./pokemon";
import { exo_concours, exo_concours_group, exo_concours_nested } from "./concours";
import { exo_fonciere } from "./fonciere";
import { exo_pays } from "./pays"
import { exo_metro } from "./metro";
import { exo_cac40, exo_cac40_group, exo_cac40_join } from "./cac40";
import { exo_boulangerie, exo_boulangerie_join, exo_boulangerie_group } from "./boulangerie";

export interface Exo_interface {
  name: string;
  diagram: string;
  db_url: string;
  description: JSX.Element;
  questions: string[];
  answers: string[];
}

export const cours = [
    { name: "Requêtes sur une table", url: "cours/1_select/select.pdf", exos: [exo_metro, exo_pays, exo_cac40, exo_boulangerie] },
    { name: "Plusieurs tables", url: "cours/2_join/join.pdf", exos: [exo_concours, exo_pokemon, exo_cac40_join, exo_boulangerie_join] },
    { name: "Fonctions d'agrégation", url: "cours/3_groupby/groupby.pdf", exos: [exo_concours_group, exo_pokemon_group, exo_cac40_group, exo_boulangerie_group] },
    { name: "Requêtes imbriquées", url: "cours/4_imbrique/imbrique.pdf", exos: [exo_concours_nested] },
    { name: "Résumé", url: "resume/sql_resume.pdf", exos: [] },
];

export const exercices_other = [exo_fonciere];
