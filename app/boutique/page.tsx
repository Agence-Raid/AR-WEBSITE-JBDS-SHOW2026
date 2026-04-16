'use client';

import Image from 'next/image';
import { allProducts } from '@/data/products';
import { useState } from 'react';
import Header from '@/components/Header';

export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Vêtements', 'Accessoires'];

  const filteredProducts =
    selectedCategory === 'Tous'
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="fixed inset-0 bg-black overflow-y-auto overflow-x-hidden">
      <Header showBackButton backHref="/" variant="solid" />

      {/* Hero Section */}
      <div className="pt-20 px-4 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">
              Boutique du spectacle
            </h1>
            <p className="text-gray-400 text-base sm:text-lg">
              Souvenirs et produits disponibles
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all touch-manipulation ${
                  selectedCategory === category
                    ? 'bg-[#E50914] text-white'
                    : 'bg-zinc-800 text-gray-300 active:bg-zinc-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-zinc-900 rounded-lg overflow-hidden"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <span className="text-white font-bold text-sm bg-red-600 px-3 py-1 rounded">
                        Épuisé
                      </span>
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <div className="bg-black/80 backdrop-blur-sm px-2 py-1 rounded">
                      <span className="text-white font-bold text-sm">
                        {product.price}€
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">
                    {product.category}
                  </p>
                  <p className="text-xs text-gray-300 line-clamp-2 mb-3">
                    {product.description}
                  </p>
                  {product.sizes && (
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                Aucun produit dans cette catégorie
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Info Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-sm border-t border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-sm font-semibold mb-1">
            🎭 Les produits sont en vente !
          </p>
          <p className="text-gray-400 text-xs">
            Stand situé dans le hall principal
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}