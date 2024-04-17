import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const BLOG_DIR = join(process.cwd(), 'src/content/blog');

const load = (locale = 'mn') => {
  const dir = join(BLOG_DIR, locale);
  const files = fs.readdirSync(dir);

  const posts = Promise.all(
    files
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const slug = filename.replace('.md', '');
        return await findPostBySlug(slug, locale);
      }),
  );

  return posts;
};

let _posts;

/** */
export const fetchPosts = async (locale = 'mn') => {
  if (!_posts) {
    _posts = await load(locale);
  }

  return await _posts;
};

/** */
export const findLatestPosts = async ({ count } = {}) => {
  const _count = count || 4;
  const posts = await fetchPosts();

  return posts ? posts.slice(_count * -1) : [];
};

/** */
export const findPostBySlug = async (slug, locale = 'mn') => {
  if (!slug) return null;

  try {
    const readFile = fs.readFileSync(join(BLOG_DIR, locale, `${slug}.md`), 'utf-8');
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      ...frontmatter,
      content,
    };
  } catch (e) {}

  return null;
};
