const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html"
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  }
}