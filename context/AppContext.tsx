'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AppView = 'intro' | 'profile-selection' | 'homepage';

interface AppContextType {
  currentView: AppView;
  selectedProfile: string | null;
  setCurrentView: (view: AppView) => void;
  setSelectedProfile: (profile: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const PROFILE_COOKIE_NAME = 'netflix_profile';
const COOKIE_EXPIRY_DAYS = 30;

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
}

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState<AppView>('intro');
  const [selectedProfile, setSelectedProfileState] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedProfile = getCookie(PROFILE_COOKIE_NAME);
    if (savedProfile) {
      setSelectedProfileState(savedProfile);
      setCurrentView('homepage');
    }
    setIsInitialized(true);
  }, []);

  const setSelectedProfile = (profile: string) => {
    setSelectedProfileState(profile);
    setCookie(PROFILE_COOKIE_NAME, profile, COOKIE_EXPIRY_DAYS);
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <AppContext.Provider
      value={{
        currentView,
        selectedProfile,
        setCurrentView,
        setSelectedProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
