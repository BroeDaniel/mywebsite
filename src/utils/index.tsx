// type Post = {
//   slug: string;
//   frontmatter: {
//     [key: string]: any;
//     date: string;
//   };
// };

export const sortByDate = (a: any, b: any) => {
  const aDate: Date = new Date(a.frontmatter.date);
  const bDate: Date = new Date(b.frontmatter.date);
  return bDate.getTime() - aDate.getTime();
};
