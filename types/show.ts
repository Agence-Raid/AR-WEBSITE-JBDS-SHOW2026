import { Dancer } from './dancer';

export interface Show {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  image: string;
  category: string;
  description: string;
  duration: string;
  dancers: Dancer[];
}