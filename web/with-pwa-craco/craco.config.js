const webpack = require("webpack");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser",
        }),
        new WebpackManifestPlugin({
          publicPath: "/",
          generate: (seed, files, entries) => ({
            name: "Capsule Example | PWA + CRACO",
            short_name: "Capsule Example",
            description: "A simple example of using Capsule with PWA CRACO",
            display: "standalone",
            theme_color: "#000000",
            background_color: "#ffffff",
            start_url: "/",
            icons: [
              {
                src: "192.png",
                type: "image/png",
                sizes: "192x192",
              },
              {
                src: "512.png",
                type: "image/png",
                sizes: "512x512",
                purpose: "any maskable",
              },
            ],
          }),
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
        vm: false,
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

      webpackConfig.module.rules.push({
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules/,
      });

      webpackConfig.ignoreWarnings = [(warning) => warning.message.includes("Failed to parse source map")];

      return webpackConfig;
    },
  },
};
