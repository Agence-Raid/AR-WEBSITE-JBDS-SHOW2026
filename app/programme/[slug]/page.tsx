'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { allShows } from '@/data/shows';
import Header from '@/components/Header';

export default function ShowDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const show = allShows.find((s) => s.slug === slug);

  if (!show) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-white text-3xl font-bold mb-4">
            Show non trouvé
          </h1>
          <Link
            href="/programme"
            className="text-[#E50914] hover:underline text-lg"
          >
            Retour au programme
          </Link>
        </div>
      </div>
    );
  }

  const relatedShows = allShows.filter(
    (s) => s.category === show.category && s.id !== show.id
  );

  // Trouver le prochain show dans l'ordre
  const currentIndex = allShows.findIndex((s) => s.id === show.id);
  const nextShow = currentIndex < allShows.length - 1 ? allShows[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 bg-black overflow-y-auto overflow-x-hidden">
      <Header showBackButton backHref="/programme" variant="transparent" />

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-end pb-8 sm:pb-12">
        <Image
          src={show.image}
          alt={show.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

        <div className="relative z-20 px-4 w-full max-w-3xl">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-[#E50914] text-white text-xs font-bold rounded">
              {show.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
            {show.title}
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-white font-semibold">{show.subtitle}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">{show.duration}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">
              {show.dancers.length} groupe
              {show.dancers.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-white text-2xl font-bold mb-4">Synopsis</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              {show.description}
            </p>
          </div>

          {/* Dancers */}
          <div className="mb-12">
            <h2 className="text-white text-2xl font-bold mb-4">Danseurs / Groupes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {show.dancers.map((dancer, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-lg px-5 py-4"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white text-lg font-semibold">{dancer.name}</h3>
                    {dancer.city && (
                      <span className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded shrink-0">
                        {dancer.city}
                      </span>
                    )}
                  </div>
                  {dancer.coaches && dancer.coaches.length > 0 && (
                    <p className="text-gray-400 text-sm">
                      Coach{dancer.coaches.length > 1 ? 's' : ''}: {dancer.coaches.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Next Show */}
          {nextShow && (
            <div className="mb-12">
              <h2 className="text-white text-2xl font-bold mb-4">Prochain show</h2>
              <Link
                href={`/programme/${nextShow.slug}`}
                className="group relative block aspect-video rounded-lg overflow-hidden active:scale-[0.98] transition-transform touch-manipulation"
              >
                <Image
                  src={nextShow.image}
                  alt={nextShow.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 bg-[#E50914] text-white text-xs font-bold rounded">
                      {nextShow.category}
                    </span>
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                    {nextShow.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <span>{nextShow.subtitle}</span>
                    <span>•</span>
                    <span>{nextShow.duration}</span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Related Shows */}
          {relatedShows.length > 0 && (
            <div>
              <h2 className="text-white text-2xl font-bold mb-4">
                Autres shows de {show.category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {relatedShows.map((relatedShow) => (
                  <Link
                    key={relatedShow.id}
                    href={`/programme/${relatedShow.slug}`}
                    className="group relative aspect-video rounded-lg overflow-hidden active:scale-95 transition-transform touch-manipulation"
                  >
                    <Image
                      src={relatedShow.image}
                      alt={relatedShow.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-active:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-base sm:text-lg font-bold drop-shadow-lg text-center px-2">
                        {relatedShow.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
