// Zentrale Einstellungen des Blogs. Hier kannst du Namen und Texte anpassen.
export const SITE_TITLE = 'Sebastians Blog';
export const SITE_DESCRIPTION = 'Persönliche Gedanken und Geschichten von Sebastian.';
export const AUTHOR = 'Sebastian';

// Kategorien: Der Schlüssel (links) wird im Beitrag unter "category" eingetragen.
// "look" bestimmt das Aussehen der Beiträge dieser Kategorie:
//   'terminal' = wie ein Terminal-Log, 'portal' = wie ein Tor in eine andere Welt.
// "folder" ist der Ordnername, der im Terminal-Look angezeigt wird.
export const CATEGORIES = {
  persoenliches: {
    name: 'Persönliches',
    description: 'Gedanken, Erlebnisse und Dinge, die mich bewegen.',
    emoji: '🌿',
    look: 'terminal',
    folder: 'leben',
  },
  geschichten: {
    name: 'Geschichten',
    description: 'Erzählungen, Kurzgeschichten und alles Ausgedachte.',
    emoji: '📖',
    look: 'portal',
    folder: 'geschichten',
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
