const { resolve } = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "src/urojex.js"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "urojex.min.js",
    library: "urojex",
  },
  plugins: [
    new UglifyJsPlugin({
      exclude: [/\.min\.js$/gi], // skip pre-minified libs
    }),
  ],
};
