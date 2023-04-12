import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMatter, sortByDate } from '@/utils/index';

interface GreyMatterType {
  data: { [key: string]: string };
}

const files = fs.readdirSync(path.join('posts'));

export function getPosts() {
  const posts: PostMatter[] = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter }: GreyMatterType = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return posts.sort(sortByDate);
}
