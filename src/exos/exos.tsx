import { exo_pokemon } from "./pokemon";
import { exo_concours_plusieurs, exo_concours_group } from "./concours";
import { exo_fonciere } from "./fonciere";
import { exo_pays } from "./pays"
import { exo_metro } from "./metro";

export interface Exo_interface {
  name: string;
  diagram: string;
  db_url: string;
  description: JSX.Element;
  questions: string[];
  answers: string[];
}

export const cours = [
    { name: "Requêtes sur une table", url: "1_select/select.pdf", exos: [exo_pays, exo_metro] },
    { name: "Plusieurs tables", url: "2_join/join.pdf", exos: [exo_concours_plusieurs] },
    { name: "Fonctions d'agrégation", url: "3_groupby/groupby.pdf", exos: [exo_concours_group, exo_pokemon] },
    { name: "Requêtes imbriquées", url: "4_imbrique/imbrique.pdf", exos: ["Concours"] },
];

export const exercices_other = [exo_fonciere];
