export type City = 'Bordeaux' | 'Langon';

export interface Dancer {
  name: string;
  city?: City;
  coaches?: string[];
}
