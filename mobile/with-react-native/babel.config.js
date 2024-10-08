module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    ["module:react-native-dotenv"],
    [
      "module-resolver",
      {
        alias: {
          "@rn-integration-examples/shared-ui": "../shared-ui/src",
        },
      },
    ],
  ],
};
