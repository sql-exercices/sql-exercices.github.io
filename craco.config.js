module.exports = {
  webpack: {
    target: 'node',
    resolve: {
      extensions: [".ts", ".js", ".json"],
    },
    configure: {
      // See https://github.com/webpack/webpack/issues/6725
      module: {
        rules: [
          {
            test: /\.wasm$/,
            type: "javascript/auto",
          },
        ],
      },
    },
  },
};
