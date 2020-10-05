/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */

const MDXComponents = {
  // h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
  // h1: props => <StyledH1 {...props} />,
  // code: StyledCode,
  // code: props => <CodeBlock {...props} />,
  img: props => (
    <img style={{ maxWidth: '100%', borderRadius: '6px' }} {...props} />
  ),
  code: props => {
    const { className = '' } = { ...props };
    return <code {...props} className={className + ' line-numbers'} />;
  },
  pre: props => {
    const { className = '' } = { ...props };
    return <pre {...props} className={className + ' line-numbers'} />;
  }
};

export default MDXComponents;
