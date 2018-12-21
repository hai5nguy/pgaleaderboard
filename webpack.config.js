const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (_, env) => {
  const isProd = env.mode === 'production';
  const config = {
    mode: 'development',
    entry: './ui/index',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'build'),
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_module/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-syntax-class-properties', '@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'ui/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      }),
    ],
    resolve: {
      alias: {
        actions: resolve(__dirname, 'ui/actions'),
        components: resolve(__dirname, 'ui/components'),
        store: resolve(__dirname, 'ui/store/store.js'),
      },
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      contentBase: './ui/static/',
      historyApiFallback: true,
      port: 5000,
    },
    devtool: 'eval-source-map',
  };

  // if (isProd) {
  //     config.plugins.push(
  //         new CopyWebpackPlugin([
  //             { from: 'ui/static/' },
  //         ]),
  //     )
  // }

  return config;
};
