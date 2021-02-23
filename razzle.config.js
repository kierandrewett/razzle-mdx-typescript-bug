'use strict';

const emoji = require('remark-emoji');

module.exports = {
  plugins: [
    "typescript",
    {
      name: 'mdx',
      options: {
        mdPlugins: [emoji],
      },
    },
  ],
};
