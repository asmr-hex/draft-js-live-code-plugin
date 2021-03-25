const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = [
  {
    mode: 'development',
    entry: {
      index: './examples/src/index.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: 'inline-source-map',
    devServer: {
      publicPath: '/',
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './examples/dist'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(jsx|js)$/,
          include: path.resolve(__dirname, 'examples/src'),
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  "targets": "defaults" 
                }],
                '@babel/preset-react'
              ]
            }
          }]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./examples/src/index.html",
        filename: "index.html"
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'examples/dist'),
      clean: true,
    },    
  },
]


/*
* (1) build library on change
* (2) build example webapp on change and when library build changes
*/
// module.exports = [
//   {
//     name: 'umd bundle',
//     entry: {
//       'index': './src/index.ts',
//     },
//     resolve: {
//       extensions: ['.ts', '.tsx', '.js'],
//     },
//     devtool: 'inline-source-map',
//     module: {
//       rules: [
//         {
//           test: /\.tsx?$/,
//           use: 'ts-loader',
//           exclude: /node_modules/,
//         },
//       ],
//     }, 
//     output: {
//       filename: '[name].cjs.js',
//       path: path.resolve(__dirname, 'lib'),
//       library: 'DraftJsPluginsIDE',
//       libraryTarget: 'umd',
//       globalObject: "this",
//     },    
//   },
// ]
