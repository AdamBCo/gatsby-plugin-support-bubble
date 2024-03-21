# gatsby-plugin-support-bubble

Easily add SupportBubble (supportbubble.io) to your Gatsby site.

## Install

`yarn add gatsby-plugin-support-bubble`

## Usage

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-support-bubble',
    options: {
      clientId: 'YOUR-CLIENT-ID',
      clientToken: 'YOUR-CLIENT-TOKEN'
    },
  },
],
```