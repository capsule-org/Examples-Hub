const webpack = require("webpack");
const path = require("path");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser",
        }),
      ],
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
        process: require.resolve("process/browser"),
        url: false,
        zlib: false,
        https: false,
        http: false,
      };

      const jsRule = webpackConfig.module.rules.find((rule) => rule.test && rule.test.test(".js"));

      if (jsRule) {
        jsRule.resolve = {
          ...jsRule.resolve,
          fullySpecified: false,
        };
      } else {
        webpackConfig.module.rules.push({
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
        });
      }

      const fileLoaderRule = webpackConfig.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/;
      }

      webpackConfig.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      return webpackConfig;
    },
  },
};
