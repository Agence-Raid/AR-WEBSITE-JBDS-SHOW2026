export type City = 'Bordeaux' | 'Langon' | 'Bordeaux et Langon';

export interface Dancer {
  name: string;
  city?: City;
  coaches?: string[];
}
