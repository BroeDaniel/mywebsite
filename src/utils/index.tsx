export type PostMatter = {
  slug: string;
  frontmatter: { [key: string]: string };
};

export const sortByDate = (a: PostMatter, b: PostMatter) => {
  const aDate: Date = new Date(a.frontmatter.date);
  const bDate: Date = new Date(b.frontmatter.date);
  return bDate.getTime() - aDate.getTime();
};

export const estimateReadingTime = (text: string) => {
  const averageWordsPerMinute = 330;
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / averageWordsPerMinute);
  return readingTime;
};
