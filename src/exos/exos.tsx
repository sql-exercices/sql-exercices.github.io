import { exo_pokemon } from "./pokemon";
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

export const exos: Exo_interface[] = [exo_metro, exo_pokemon, exo_fonciere, exo_pays];
