import { exo_pokemon } from "./pokemon";
import { exo_fonciere } from "./fonciere";

export interface Exo_interface {
  name: string;
  diagram: JSX.Element;
  db_url: string;
  description: JSX.Element;
  questions: string[];
  answers: string[];
}

export const exos: Exo_interface[] = [exo_fonciere, exo_pokemon];
