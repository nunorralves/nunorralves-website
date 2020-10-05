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
          style={{ ...style, padding: '20px', borderRadius: '6px' }}
        >
          {tokens.map((line, i) => (
            // <div key={i} {...getLineProps({ line, key: i })}>
            //   {line.map((token, key) => (
            //     <span key={key} {...getTokenProps({ token, key })} />
            //   ))}
            // </div>
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
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
