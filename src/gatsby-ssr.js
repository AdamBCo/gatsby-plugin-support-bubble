import React from "react";

const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  console.log('pluginOptions', pluginOptions);
  const { clientID, clientToken } = pluginOptions;
  return setPostBodyComponents([
    <script
      key={'gatsby-plugin-support-bubble'}
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var script = document.createElement('script');
            script.setAttribute('clientID', '${clientID}');
            script.setAttribute('clientToken', '${clientToken}');
            script.src = 'https://d2huomdiop2bs1.cloudfront.net/chat-module.js';
            script.async = true;
            document.body.appendChild(script);
          })();
        `,
      }}
    />,
  ]);
};

export { onRenderBody };
