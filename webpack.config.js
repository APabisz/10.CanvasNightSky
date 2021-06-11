const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./js/app.js",

  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3000,
    hot: true,
    open: "C:\\Program Files\\Firefox Developer Edition\\firefox.exe",
  },

  module: {
    rules: [
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: "file-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html", inject: true }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
