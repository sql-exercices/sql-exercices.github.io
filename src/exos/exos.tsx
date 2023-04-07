import { exo_pokemon, exo_pokemon_group } from "./pokemon";
import { exo_concours, exo_concours_group, exo_concours_nested } from "./concours";
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
    { name: "Requêtes sur une table", url: "1_select/select.pdf", exos: [exo_metro, exo_pays] },
    { name: "Plusieurs tables", url: "2_join/join.pdf", exos: [exo_concours, exo_pokemon] },
    { name: "Fonctions d'agrégation", url: "3_groupby/groupby.pdf", exos: [exo_concours_group, exo_pokemon_group] },
    { name: "Requêtes imbriquées", url: "4_imbrique/imbrique.pdf", exos: [exo_concours_nested] },
];

export const exercices_other = [exo_fonciere];
