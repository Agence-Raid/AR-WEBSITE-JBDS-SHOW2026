'use client';

import { useApp } from '@/context/AppContext';
import NetflixIntro from '@/components/NetflixIntro';
import ProfileSelection from '@/components/ProfileSelection';
import NetflixHomepage from '@/components/NetflixHomepage';

export default function Home() {
  const { currentView } = useApp();

  return (
    <>
      {currentView === 'intro' && <NetflixIntro />}
      {currentView === 'profile-selection' && <ProfileSelection />}
      {currentView === 'homepage' && <NetflixHomepage />}
    </>
  );
}
