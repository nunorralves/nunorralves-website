declare module '*.mdx' {
  let MDXComponent: (props: unknown) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: FrontMatter[];
}
