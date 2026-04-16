import { Product } from "@/types/product";

export const allProducts: Product[] = [
    {
        id: 1,
        name: 'Gourde inox',
        category: 'Accessoires',
        price: 15,
        image: '/shop/gourde.webp',
        description: 'Gourde en acier inoxydable de 700ml.s',
        inStock: true,
    },
    {
        id: 2,
        name: 'Porte clé - Blanc',
        category: 'Accessoires',
        price: 4,
        image: '/shop/portecle-blanc.webp',
        description: 'Porte-clé avec logo JBDS Danceschool - version blanc.',
        inStock: true,
    },
    {
        id: 3,
        name: 'Porte clé - Noir',
        category: 'Accessoires',
        price: 4,
        image: '/shop/portecle-noir.webp',
        description: 'Porte-clé avec logo JBDS Danceschool - version noir.',
        inStock: true,
    },
    {
        id: 4,
        name: 'Cordon téléphone réglable',
        category: 'Accessoires',
        price: 6,
        image: '/shop/laniere-telephone.webp',
        description: 'Cordon réglable pour téléphone avec logo JBDS, compatible avec tous les smartphones.',
        inStock: true,
    },
    {
        id: 5,
        name: 'Sac à cordons noir',
        category: 'Accessoires',
        price: 8,
        image: '/shop/sac-cordes.webp',
        description: 'Sac à cordons noir avec logo JBDS.',
        inStock: true,
    },
    {
        id: 6,
        name: 'Badge JBDS',
        category: 'Accessoires',
        price: 2,
        image: '/shop/badge.webp',
        description: 'Badge en métal avec logo JBDS, idéal pour personnaliser vos sacs ou vêtements.',
        inStock: true,
    }
];
