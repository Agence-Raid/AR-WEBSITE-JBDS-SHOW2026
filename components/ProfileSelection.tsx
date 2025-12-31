'use client';

import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { profiles } from '@/data/profiles';

export default function ProfileSelection() {
  const { setCurrentView, setSelectedProfile } = useApp();

  const handleProfileClick = (profile: typeof profiles[0]) => {
    setSelectedProfile(profile);
    setTimeout(() => {
      setCurrentView('homepage');
    }, 300);
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center px-4 py-8">
      <div className="w-full">
        <h1 className="text-white text-4xl sm:text-5xl font-medium text-center mb-12 sm:mb-16">
          Qui est là ?
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => handleProfileClick(profile)}
              className="group flex flex-col items-center gap-3 active:scale-95 transition-transform touch-manipulation"
            >
              <div className="relative w-full aspect-square max-w-[160px] rounded-lg overflow-hidden border-4 border-gray-700 group-active:border-white transition-all">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-gray-400 text-lg sm:text-xl group-active:text-white transition-colors">
                {profile.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
