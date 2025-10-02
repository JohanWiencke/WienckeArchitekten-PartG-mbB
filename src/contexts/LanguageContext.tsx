import React, { createContext, useContext, useState } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  de: {
    'nav.home': 'Startseite',
    'nav.contact': 'Kontakt',
    'hero.title1': 'Zeitlose Architektur',
    'hero.desc1': 'Wir schaffen Räume, die Innovation mit Tradition verbinden',
    'hero.title2': 'Moderne Eleganz',
    'hero.desc2': 'Jedes Detail wurde mit Präzision und Leidenschaft gestaltet',
    'hero.title3': 'Nachhaltige Vision',
    'hero.desc3': 'Architektur, die Umwelt und Ästhetik respektiert',
    'gallery.title': 'Unsere Projekte',
    'gallery.subtitle': 'Eine Auswahl unserer realisierten Projekte',
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Kontaktieren Sie uns für Ihr nächstes Architekturprojekt',
    'contact.info': 'Kontaktinformationen',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.address': 'Adresse',
    'contact.hours': 'Öffnungszeiten',
    'contact.monday-friday': 'Montag - Freitag',
    'contact.saturday': 'Samstag',
    'contact.sunday': 'Sonntag',
    'contact.closed': 'Geschlossen',
    'contact.location': 'Standort',
  },
  en: {
    'nav.home': 'Home',
    'nav.contact': 'Contact',
    'hero.title1': 'Timeless Architecture',
    'hero.desc1': 'We create spaces that blend innovation with tradition',
    'hero.title2': 'Modern Elegance',
    'hero.desc2': 'Every detail crafted with precision and passion',
    'hero.title3': 'Sustainable Vision',
    'hero.desc3': 'Architecture that respects environment and aesthetics',
    'gallery.title': 'Our Projects',
    'gallery.subtitle': 'A selection of our completed projects',
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch for your next architectural project',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.hours': 'Office Hours',
    'contact.monday-friday': 'Monday - Friday',
    'contact.saturday': 'Saturday',
    'contact.sunday': 'Sunday',
    'contact.closed': 'Closed',
    'contact.location': 'Location',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
