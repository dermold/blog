import type { APIRoute } from 'astro';
import { CATEGORIES } from '../consts';
import { formatDate, getPosts, url } from '../lib/utils';

// Liefert alle Beiträge als kleine Datei, die die Suche im Browser durchsucht.
export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const index = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    url: url(`blog/${post.id}/`),
    date: formatDate(post.data.date),
    category: CATEGORIES[post.data.category].name,
    tags: post.data.tags,
    // Markdown-Zeichen entfernen, damit nur der Text durchsucht wird
    text: (post.body ?? '').replace(/[#>*_`~\[\]()!-]/g, ' ').replace(/\s+/g, ' ').trim(),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
