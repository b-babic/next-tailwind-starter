// @ts-check
const withPlugins = require('next-compose-plugins');
const withSVG = require('next-react-svg');
const path = require('path');

// NextJS configuration object. See available api below:
// https://nextjs.org/docs/api-reference/next.config.js/introduction
const nextConfiguration = {
  distDir: 'build',
};

module.exports = withPlugins(
  [
    /* Add plugins to the plugins array
     * Example:
     * [pluginName, configObject] or pluginName
     * */

    [
      withSVG,
      {
        include: path.resolve(__dirname, 'assets/images'),
      },
    ],
  ],
  nextConfiguration
);
