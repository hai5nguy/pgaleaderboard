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
        'process.env.GRAPHQL_ENDPOINT': JSON.stringify(isProd ? '/graphql' : 'http://localhost:5001/graphql'),
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
      host: 'localhost',
      // contentBase: './ui/static/',
      historyApiFallback: true,
      port: 5000,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
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
