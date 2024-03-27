const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    main: path.resolve(__dirname, "src/js/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name].[contenthash].[ext]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
        type: "asset/resource",
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  optimization: {
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
    minimize: true,
  },

  devtool: "inline-source-map",

  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8008,
    open: true,
    hot: true,
  },

  performance: {
    hints: false,
  },

  plugins: [
    new MiniCssExtractPlugin(),

    /*new FaviconsWebpackPlugin({
            logo: '',
            mode: 'webapp',
            manifest: ''
        }),*/

    new HtmlWebpackPlugin({
      title: "Adnan Musinovic | Portfolio",
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      scriptLoading: "defer",
      meta: {
        author: {
          name: "author",
          content: "Adnan Musinovic",
        },
        description: {
          name: "description",
          content: "",
        },
        keyword: {
          name: "keywords",
          content: "",
        },
        "og:title": {
          property: "og:title",
          content: "",
        },
        "og:description": {
          property: "og:description",
          content: "",
        },
        "og:type": {
          property: "og:type",
          content: "website",
        },
        "og:url": {
          property: "og:url",
          content: "",
        },
        "og:image": {
          property: "og:image",
          content: "",
        },
        "twitter:card": {
          name: "twitter:card",
          content: "summary_large_image",
        },
        "twitter:title": {
          name: "twitter:title",
          content: "",
        },
        "twitter:description": {
          name: "twitter:description",
          content: "",
        },
        "twitter:image": {
          name: "twitter:image",
          content: "",
        },
        meta: {
          name: "theme-color",
          content: "#181818",
        },
      },
    }),
  ],
};
