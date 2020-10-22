/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
import CodeBlock from '../CodeBlock';
import { StyledLink, StyledOl, StyledUl } from './styles';

const MDXComponents = {
  // h1: props => <h1 style={{ color: 'tomato' }} {...props} />,
  // h1: props => <StyledH1 {...props} />,
  // code: StyledCode,
  p: props => (
    <p style={{ marginTop: '1.7rem ', marginBottom: '2rem' }} {...props} />
  ),
  code: props => <CodeBlock {...props} />,
  img: props => (
    <img style={{ maxWidth: '100%', borderRadius: '6px' }} {...props} />
  ),
  a: props => <StyledLink target="_blank" {...props} />,
  inlineCode: props => <code {...props} style={{ color: 'lightcoral' }} />,
  ul: props => <StyledUl {...props} />,
  ol: props => <StyledOl {...props} />,
  pre: props => <pre style={{ width: '100%' }} {...props} />
};

export default MDXComponents;
