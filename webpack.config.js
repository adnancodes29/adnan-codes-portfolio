const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  mode: "production",

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
    minimize: true,
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
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

    new FaviconsWebpackPlugin({
      logo: "./src/images/favicon.png",
      mode: "webapp",
      manifest: "./src/manifest.json",
    }),

    new HtmlWebpackPlugin({
      title: "Adnan Mušinović | Portfolio",
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      scriptLoading: "defer",
      meta: {
        author: {
          name: "author",
          content: "Adnan Mušinović",
        },
        description: {
          name: "description",
          content:
            "Frontend Developer specializing in building (and occasionally designing) exceptional digital experiences.",
        },
        keyword: {
          name: "keywords",
          content: "Adnan Mušinović, AdnanCodes, Frontend Developer",
        },

        //Facebook Meta Tags
        "og:url": {
          property: "og:url",
          content: "https://adnancodes.000webhostapp.com/",
        },
        "og:type": {
          property: "og:type",
          content: "website",
        },
        "og:title": {
          property: "og:title",
          content: "Adnan Mušinović | Portfolio",
        },
        "og:description": {
          property: "og:description",
          content:
            "Frontend Developer specializing in building (and occasionally designing) exceptional digital experiences.",
        },
        "og:image": {
          property: "og:image",
          content:
            "https://adnancodes.000webhostapp.com/share-image.0b22768129567546cc02..jpg",
        },
        //Twitter Meta Tags
        "twitter:card": {
          name: "twitter:card",
          content: "summary_large_image",
        },
        "twitter:site": {
          name: "twitter:site",
          content: "@adnan_codes",
        },
        "twitter:title": {
          name: "twitter:title",
          content: "Adnan Mušinović | Portfolio",
        },
        "twitter:description": {
          name: "twitter:description",
          content:
            "Frontend Developer specializing in building (and occasionally designing) exceptional digital experiences.",
        },
        "twitter:image": {
          name: "twitter:image",
          content:
            "https://adnancodes.000webhostapp.com/share-image.0b22768129567546cc02..jpg",
        },
        meta: {
          name: "theme-color",
          content: "#181818",
        },
      },
    }),

    new HtmlWebpackPlugin({
      title: "Page not found | Adnan Musinovic",
      filename: "not-found.html",
      template: path.resolve(__dirname, "src/not-found.html"),
      scriptLoading: "defer",
      meta: {
        name: "theme-color",
        content: "#181818",
      },
    }),

    new HtmlWebpackPartialsPlugin({
      path: "./src/partials/analytics.html",
      location: "head",
      priority: "low",
      options: {
        ga_property_id: "G-K0T0DRBS7S",
      },
    }),
  ],
};
