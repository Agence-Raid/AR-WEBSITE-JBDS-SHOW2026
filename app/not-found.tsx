'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Grande erreur 404 */}
          <h1 className="text-[120px] md:text-[200px] font-bold text-white mb-4 leading-none tracking-tight">
            404
          </h1>

          {/* Message d'erreur */}
          <div className="mb-8 space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Page introuvable
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto">
              Désolé, nous ne trouvons pas cette page. Vous trouverez plein de
              choses à explorer sur la page d'accueil.
            </p>
          </div>

          {/* Bouton retour à l'accueil */}
          <Link
            href="/"
            className="inline-block bg-white text-black font-semibold px-8 py-3 rounded hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
          >
            Retour à l'accueil
          </Link>

          {/* Code d'erreur style Netflix */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-600">
              Code d'erreur: <span className="font-mono">JBDS-404</span>
            </p>
          </div>
        </div>

        {/* Animation de points flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-600 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}