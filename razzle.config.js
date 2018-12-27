module.exports = {
  modify: (baseConfig, { target, dev }) => {
    const appConfig = Object.assign({}, baseConfig);

    // Note: null-loader is not installed in package.json
    appConfig.module.rules.push({
      test: /.scss$/,
      exclude: /node_modules/,
      use: 'null-loader',
    });

    return appConfig;
  },
};

