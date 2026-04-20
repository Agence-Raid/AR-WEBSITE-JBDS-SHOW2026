'use client';

import { useState, useEffect } from 'react';

export default function PostShowWrapper({ children }: { children: React.ReactNode }) {
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem('postshow-popup-seen');
    if (!seen) {
      setShowPopup(true);
      sessionStorage.setItem('postshow-popup-seen', '1');
    }
  }, []);

  return (
    <>
      {children}

      {/* Sitewide bottom banner */}
      {mounted && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-900/95 backdrop-blur-sm border-t border-gray-800 px-4 py-3 cursor-pointer"
          onClick={() => setShowPopup(true)}
        >
          <p className="text-white text-sm font-semibold text-center">
            🎭 Merci à tous pour ce moment inoubliable !
          </p>
        </div>
      )}

      {/* Thank-you popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl max-w-lg w-full p-8 shadow-2xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors touch-manipulation"
              aria-label="Fermer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="text-center">
              <div className="text-5xl mb-4">🎭</div>
              <h2 className="text-white text-2xl font-bold mb-6">
                Merci à tous !
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Le JBDS Show 2026 est maintenant terminé. Un immense merci à tous les élèves, professeurs,
                parents et spectateurs qui ont contribué à faire de ce spectacle un moment inoubliable.
                À très bientôt pour la suite&nbsp;!
              </p>
              <div className="mt-6 h-px bg-zinc-700" />
              <p className="mt-4 text-gray-500 text-sm">
                — Toute l'équipe JBDS Danceschool
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}