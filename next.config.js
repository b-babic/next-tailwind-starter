// @ts-check
const withPlugins = require('next-compose-plugins');

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
  ],
  nextConfiguration
);
