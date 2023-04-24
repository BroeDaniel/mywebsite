// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post as PostType } from '@/pages/index';

interface FrontMatters {
  frontmatter: {
    [key: string]: string;
  };
}

export default function searchResults(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let posts;

  if (process.env.NODE_ENV === 'production') {
    // Fetch from cache
    posts = require('../../../cache/data').posts;
  } else {
    const files = fs.readdirSync(path.join('posts'));

    posts = files.map((filename) => {
      const slug = filename.replace('.md', '');

      const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
      );

      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        slug,
        frontmatter,
      };
    });
  }

  const results: PostType[] = posts.filter(
    ({ frontmatter }: FrontMatters) =>
      frontmatter.title.toLowerCase().indexOf(req.query.q as string) != -1 ||
      frontmatter.excerpt.toLowerCase().indexOf(req.query.q as string) != -1 ||
      frontmatter.category.toLowerCase().indexOf(req.query.q as string) != -1
  );

  res.status(200).json({ results });
}
