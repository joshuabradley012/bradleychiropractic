import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/content/blog');
const testimonialsDirectory = join(process.cwd(), 'src/content/testimonials');

function getSlugs(dir) {
  return fs.readdirSync(dir);
}

function getBySlug(dir, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  })

  return items;
}

function getAll(dir, fields = [], count) {
  const slugs = getSlugs(dir);

  const hasDate = fields.includes('date');

  if (!hasDate) {
    fields.push('date');
  }

  let items = slugs
    .map((slug) => getBySlug(dir, slug, fields))
    .sort((item1, item2) => {
      if (item1.date && item2.date) {
        const date1 = new Date(item1.date);
        const date2 = new Date(item2.date);
        const date1IsNewer = date1.getTime() > date2.getTime();
        return date1IsNewer ? -1 : 1
      }
      return 1;
    });

  if (count > 0) {
    items = items.slice(0, count);
  }

  return items;
}

export function getPostSlugs() {
  return getSlugs(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  return getBySlug(postsDirectory, slug, fields);
}

export function getAllPosts(fields = [], count) {
  return getAll(postsDirectory, fields, count);
}

export function getPostsByCategory(category, fields = [], count) {
  const posts = getAll(postsDirectory, fields);
  let results = posts.filter(post => post.category === category);
  if (count) {
    results = results.slice(0, count);
  }
  return results;
}

export function getTestimonialSlugs() {
  return getSlugs(testimonialsDirectory);
}

export function getTestimonialBySlug(slug, fields = []) {
  return getBySlug(testimonialsDirectory, slug, fields);
}

export function getTestimonialsBySlugs(slugs = [], fields = []) {
  const testimonials = [];

  slugs.forEach(slug => {
    testimonials.push(getTestimonialBySlug(slug, fields));
  });

  return testimonials;
}

export function getAllTestimonials(fields = [], count) {
  return getAll(testimonialsDirectory, fields, count);
}

