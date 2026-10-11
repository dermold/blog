import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getPosts, url } from '../lib/utils';

// RSS-Feed: Damit können Leser neue Beiträge abonnieren.
export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: url(`blog/${post.id}/`),
      categories: post.data.tags,
    })),
    customData: '<language>de-de</language>',
  });
}
