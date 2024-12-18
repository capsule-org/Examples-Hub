const { getDefaultConfig } = require("expo/metro-config");
const nodeLibs = require("node-libs-react-native");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...nodeLibs,
  crypto: require.resolve("react-native-quick-crypto"),
  buffer: require.resolve("@craftzdog/react-native-buffer"),
  stream: require.resolve("readable-stream"),
};

module.exports = config;
