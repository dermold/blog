# Sebastians Blog

Mein persönlicher Blog, gebaut mit [Astro](https://astro.build). Beiträge sind einfache Markdown-Dateien.

## Einen neuen Beitrag schreiben

1. Öffne den Ordner `src/content/blog/`.
2. Lege eine neue Datei an, z. B. `mein-neuer-beitrag.md`. Der Dateiname wird zur Adresse
   (`…/blog/mein-neuer-beitrag/`). Nur Kleinbuchstaben, Zahlen und Bindestriche verwenden.
3. Kopiere den Inhalt aus [`VORLAGE-BEITRAG.md`](VORLAGE-BEITRAG.md) hinein und fülle ihn aus.
4. Speichern. Sobald die Änderung auf GitHub ist, wird der Blog automatisch neu veröffentlicht.

Die Angaben oben in jedem Beitrag:

| Feld          | Bedeutung                                                  |
| ------------- | ---------------------------------------------------------- |
| `title`       | Überschrift                                                |
| `description` | Kurzer Teaser für Übersicht und Suchmaschinen              |
| `date`        | Veröffentlichungsdatum, Format `JJJJ-MM-TT`                |
| `category`    | `persoenliches` oder `geschichten`                         |
| `tags`        | Schlagwörter, z. B. `['Reisen', 'Gedanken']`               |
| `draft`       | `true` = Entwurf, erscheint nicht auf der öffentlichen Seite |

## Wo was anzupassen ist

| Was                            | Datei                         |
| ------------------------------ | ----------------------------- |
| Blogname, Beschreibung, Kategorien | `src/consts.ts`           |
| Farben und Schriften           | `src/styles/global.css` (ganz oben) |
| Text der Startseite            | `src/pages/index.astro`       |
| Über-mich-Seite                | `src/pages/ueber-mich.astro`  |
| Menü                           | `src/components/Header.astro` |

## Auf dem eigenen Computer ansehen (optional)

Benötigt [Node.js](https://nodejs.org) (Version 22 oder neuer).

```sh
npm install      # einmalig
npm run dev      # startet die Vorschau unter http://localhost:4321/blog/
```

## Aufbau

```
src/
├── content/blog/   ← deine Beiträge (Markdown)
├── components/     ← wiederverwendbare Bausteine (Kopfzeile, Karten …)
├── layouts/        ← Grundgerüst jeder Seite
├── pages/          ← jede Datei ist eine Seite der Website
├── styles/         ← Design (Farben, Schriften)
└── consts.ts       ← zentrale Einstellungen
```
