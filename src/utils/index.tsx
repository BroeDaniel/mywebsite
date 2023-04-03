type Post = {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
};

export const sortByDate = (a: Post, b: Post) => {
  const aDate: Date = new Date(a.frontmatter.date);
  const bDate: Date = new Date(b.frontmatter.date);
  return bDate.getTime() - aDate.getTime();
};
