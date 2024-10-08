const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const path = require("path");
const nodeLibs = require("node-libs-react-native");

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  projectRoot: __dirname,
  watchFolders: [path.resolve(__dirname, "../shared-ui")],
  resolver: {
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
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
