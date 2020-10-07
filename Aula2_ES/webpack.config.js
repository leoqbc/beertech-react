const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
    sourceMapFilename: "[name].js.map"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ],
            plugins: [
              "syntax-async-functions",
              "@babel/plugin-transform-regenerator",
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      }
    ]
  }
}