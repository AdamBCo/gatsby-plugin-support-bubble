import React from 'react';

exports.onRenderBody = ({setPostBodyComponents}, pluginOptions) => {
    return setPostBodyComponents([
      <script
        key={'gatsby-plugin-support-bubble'}
        dangerouslySetInnerHTML={{
          __html: `
          window.supportBubbleClientId = '${pluginOptions.clientId}';
          window.supportBubbleClientToken = '${pluginOptions.clientToken}';
          !function(){var t;if(!(t=window.supportBubblet=window.supportBubble=window.supportBubblet||[]).init)t.invoked?window.console&&console.error&&console.error("Support Bubble snippet included twice."):(t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n;return(n=Array.prototype.slice.call(arguments)).unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e,n,o;o=3e5*Math.ceil(new Date/3e5),(n=document.createElement("script")).type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://d2huomdiop2bs1.cloudfront.net/chat-module.js",(e=document.getElementsByTagName("script")[0]).parentNode.insertBefore(n,e)})}();
          `,
        }}
      />,
    ]);
};