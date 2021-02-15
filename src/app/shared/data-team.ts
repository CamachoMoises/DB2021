export interface DataTeam {
  id: number;
  first_name: string;
  height_feet: Number;
  height_inches: number;
  last_name: string;
  position: string;
  team?: Team;
  weight_pounds: number;
}
export interface Team {
  id?: number;
  abbreviation?: string;
  city?: string;
  conference?: string;
  division?: string;
  full_name?: string;
  name?: string;
}
