'use client';

import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';
import Header from './Header';

export default function NetflixHomepage() {
  return (
    <div className="fixed inset-0 bg-black overflow-y-auto overflow-x-hidden">
      <Header showProfileButton variant="transparent" />

      {/* Hero Banner */}
      <div className="relative h-[70vh] min-h-[500px] flex items-end pb-16 sm:pb-20">
        <Image
          src="/bg-show.webp"
          alt="Spectacle de danse"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

        <div className="relative z-20 px-4 w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight max-w-sm">
            JBDS Show 2026
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mb-6 max-w-md leading-relaxed">
            Découvrez les performances exceptionnelles de notre école de danse.
            Une expérience unique mêlant styles contemporains, classiques et
            modernes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/programme"
              className="bg-white text-black px-6 py-3 rounded font-bold flex items-center justify-center gap-2 active:bg-gray-200 transition touch-manipulation text-base"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Programme complet
            </Link>
            <Link
              href="/boutique"
              className="bg-gray-500/70 text-white px-6 py-3 rounded font-bold flex items-center justify-center gap-2 active:bg-gray-500/90 transition touch-manipulation text-base"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Boutique
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="relative z-20 pb-8 space-y-8">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-3 px-4">
              {category.title}
            </h2>
            <div className="flex gap-2 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {category.shows.map((show) => (
                <Link
                  key={show.id}
                  href={`/programme/${show.slug}`}
                  className="relative min-w-[250px] sm:min-w-[280px] h-[140px] sm:h-[160px] rounded-lg overflow-hidden active:scale-95 transition-transform snap-start touch-manipulation group"
                >
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-active:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xl sm:text-2xl font-bold drop-shadow-lg">
                      {show.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
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
