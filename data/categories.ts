import { allShows } from "@/data/shows";
import { Category } from "@/types/category";

export const categories : Category[] = [
  {
    title: 'Partie 1',
    shows: allShows.filter((show) => show.category === 'Partie 1'),
  },
  {
    title: 'Partie 2',
    shows: allShows.filter((show) => show.category === 'Partie 2'),
  },
  {
    title: 'Partie 3',
    shows: allShows.filter((show) => show.category === 'Partie 3'),
  },
  {
    title: 'Partie 4',
    shows: allShows.filter((show) => show.category === 'Partie 4'),
  },
];