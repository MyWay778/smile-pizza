const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const isProd = process.argv[process.argv.indexOf('--mode') + 1] === 'production';

module.exports = {
  mode: 'none',
  entry: {
    bundle: path.join(__dirname, 'src', 'index.tsx')
  },
  output: {
    filename: '[name]_[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'assets/[contenthash:8][ext]'
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@features': path.resolve(__dirname, 'src/features/')
    }
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
      terserOptions: {
        format: {
          comments: false
        }
      }
    })]
  },
  devServer: {
    port: 3000,
    hot: true
  },
  plugins: [
    new SpriteLoaderPlugin({
      plainSprite: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new StylelintPlugin({
      configFile: '.stylelintrc.json',
      extensions: 'scss'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: './assets/sprite.svg',
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.scss$/i,
        use: [
          isProd
            ? MiniCssExtractPlugin.loader
            : 'style-loader', {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[local]_[hash:base64:8]',
                localIdentHashDigestLength: 8
              }
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "@styles/shared";'
            }
          }]
      }
    ]
  }
};
