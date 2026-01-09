import { allShows } from "@/data/shows";
import { Category } from "@/types/category";

export const categories: Category[] = [
    {
        title: 'Comédie musicale',
        shows: allShows.filter((show) => show.category === 'Comédie musicale'),
    },
    {
        title: 'K-pop',
        shows: allShows.filter((show) => show.category === 'K-pop'),
    },
    {
        title: 'Action',
        shows: allShows.filter((show) => show.category === 'Action'),
    },
    {
        title: 'Drame',
        shows: allShows.filter((show) => show.category === 'Drame'),
    },
    {
        title: 'Romance',
        shows: allShows.filter((show) => show.category === 'Romance'),
    },
    {
        title: 'Science fiction',
        shows: allShows.filter((show) => show.category === 'Science fiction'),
    }
];