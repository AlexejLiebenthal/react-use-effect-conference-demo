import { Highlight, themes } from "prism-react-renderer";

export const CodeBlock = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  return (
    <div className="mockup-code max-h-96 w-full overflow-scroll">
      <Highlight theme={themes.nightOwl} code={code} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <>
            {tokens.map((line, i) => (
              <pre data-prefix={i} key={i}>
                {line.map((token, key) => (
                  <code {...getLineProps({ line, key })} key={key}>
                    <span {...getTokenProps({ token, key })} key={key} />
                  </code>
                ))}
              </pre>
            ))}
          </>
        )}
      </Highlight>
    </div>
  );
};
