// Zentrale Einstellungen des Blogs. Hier kannst du Namen und Texte anpassen.
export const SITE_TITLE = 'Sebastians Blog';
export const SITE_DESCRIPTION = 'Persönliche Gedanken und Geschichten von Sebastian.';
export const AUTHOR = 'Sebastian';

// Kategorien: Der Schlüssel (links) wird im Beitrag unter "category" eingetragen.
export const CATEGORIES = {
  persoenliches: {
    name: 'Persönliches',
    description: 'Gedanken, Erlebnisse und Dinge, die mich bewegen.',
    emoji: '🌿',
  },
  geschichten: {
    name: 'Geschichten',
    description: 'Erzählungen, Kurzgeschichten und alles Ausgedachte.',
    emoji: '📖',
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
