const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: ["@babel/polyfill", "./src/index.tsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", "json"],
  },
  externals: "/node_modules",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          /* devMode ? 'style-loader' : */
          // MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
        include: path.resolve("src"),
        exclude: /node_modules/,
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash:7].[ext]",
        },
        include: path.resolve("src"),
        exclude: /node_modules/,
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
        include: path.resolve("src"),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./public"),
        to: "./public",
        ignore: [".*"],
      },
    ]),
  ],
  devServer: {
    proxy: {
      "/v1/**": {
        target: "https://thumbnails.roblox.com",
        changeOrigin: true,
      },
    },
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
  },
};
