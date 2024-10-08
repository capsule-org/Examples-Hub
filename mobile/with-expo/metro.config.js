const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");
const nodeLibs = require("node-libs-react-native");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.watchFolders = [...(config.watchFolders || []), path.resolve(__dirname, "../shared-ui")];

config.resolver = {
  ...config.resolver,
  nodeModulesPaths: [path.resolve(__dirname, "node_modules")],
  extraNodeModules: {
    ...new Proxy(
      {},
      {
        get: (target, name) => path.join(__dirname, `node_modules/${name}`),
      }
    ),
    ...nodeLibs,
    crypto: require.resolve("react-native-quick-crypto"),
    buffer: require.resolve("@craftzdog/react-native-buffer"),
  },
};

config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

module.exports = config;
