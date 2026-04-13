'use client';

import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/categories';
import Header from '@/components/Header';

export default function ProgrammePage() {
  return (
    <div className="fixed inset-0 bg-black overflow-y-auto overflow-x-hidden">
      <Header showBackButton backHref="/" variant="solid" />

      {/* Content */}
      <div className="pt-20 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">
            Programme du Spectacle
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-8">
            Découvrez tous les shows de la soirée
          </p>

          <div className="space-y-8">
            {categories.map((category, categoryIndex) =>
              category.isEntracte ? (
                <div key={categoryIndex} className="flex items-center gap-4 py-2 my-8">
                  <div className="flex-1 h-px bg-white/20" />
                  <span className="text-white/50 text-sm font-light tracking-[0.3em] uppercase">{category.title}</span>
                  <div className="flex-1 h-px bg-white/20" />
                </div>
              ) : (
                <div key={categoryIndex} className="mb-4">
                  {/*<h2 className="text-white text-xl font-bold mb-3">{category.title}</h2>*/}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.shows.map((show) => (
                      <Link
                        key={show.id}
                        href={`/programme/${show.slug}`}
                        className="group bg-zinc-900 rounded-lg overflow-hidden active:scale-95 transition-transform touch-manipulation"
                      >
                        <div className="relative aspect-video">
                          <Image
                            src={show.image}
                            alt={show.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2">
                            <h2 className="text-white font-bold text-2xl">
                              {show.title}
                            </h2>
                            <p className="text-white/60 text-sm font-semibold mb-1">
                              {show.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-gray-400">
                              {show.duration}
                            </span>
                            <span className="text-xs text-gray-600">•</span>
                            <span className="text-xs text-gray-400">
                              {show.dancers.length} groupe
                              {show.dancers.length > 1 ? 's' : ''}
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                            {show.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
