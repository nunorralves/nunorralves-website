/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { Line, LineContent, LineNo } from './styles';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');

  // console.log('==============', children, className, language);
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
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
