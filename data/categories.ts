import { allShows } from "@/data/shows";
import { Category } from "@/types/category";

export const categories: Category[] = [
    {
        title: '1ère partie',
        shows: [],
        isEntracte: true,
    },
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
        title: '2ème partie',
        shows: [],
        isEntracte: true,
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
    },
    {
        title: 'Final',
        shows: [],
        isEntracte: true,
    },
];