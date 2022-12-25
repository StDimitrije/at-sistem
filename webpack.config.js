const HubSpotAutoUploadPlugin = require('@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = ({ account, autoupload }) => ({
  entry: './js/main.js',
  output: {
    filename: 'js/main.js',
    clean: true,
  },
  plugins: [
    new HubSpotAutoUploadPlugin({
      account,
      autoupload,
      src: 'dist',
      dest: 'at-sistem-theme',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './theme.json', to: 'theme.json' },
        { from: './fields.json', to: 'fields.json' },
        { from: './css', to: 'css' },
        { from: './images', to: 'images' },
        { from: './modules', to: 'modules' },
        { from: './sections', to: 'sections' },
        { from: './templates', to: 'templates' },
      ],
    }),
  ],
  optimization: {
    minimize: false,
    minimizer: [
      new HtmlMinimizerPlugin(),
    ],
  },
})
