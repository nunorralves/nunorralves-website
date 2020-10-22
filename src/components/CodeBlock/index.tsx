/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Highlight, { defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/vsDark';
// import theme from 'prism-react-renderer/themes/oceanicNext';
import lightTheme from 'prism-react-renderer/themes/github';
import { Line, LineContent, LineNo } from './styles';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

const CodeBlock = ({ children, className }) => {
  const { title } = useContext(ThemeContext);
  const language = className.replace(/language-/, '');

  // Override Prism github background color: default was #f6f8fa
  lightTheme.plain.backgroundColor = '#f0f2f6';
  // console.log('==============', children, className, language);
  return (
    <Highlight
      {...defaultProps}
      theme={title === 'light' ? lightTheme : darkTheme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            marginTop: '1rem',
            marginBottom: '1rem',
            padding: '20px',
            borderRadius: '6px',
            width: '100%'
          }}
        >
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              {language === 'bash' ? null : <LineNo>{i + 1}</LineNo>}
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
