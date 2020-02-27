const path = require('path')
const Dotenv = require('dotenv-webpack')
const HTMLWebpack = require('html-webpack-plugin')
const TerserWebpack = require('terser-webpack-plugin')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDevelopment = process.env.NODE_ENV === 'development'

const optimization = () => {
  const development = {
    splitChunks: {
      chunks: 'all'
    }
  }
  const production = {
    minimize: true,
    minimizer: [new TerserWebpack({ cache: true })],
    splitChunks: {
      minSize: 10000,
      maxSize: 250000
    }
  }
  return isDevelopment ? development : production
}

const fileName = ext =>
  isDevelopment ? `[name].${ext}` : `[name].[hash].${ext}`

const devTool = () => (isDevelopment ? 'source-map' : '')

module.exports = {
  mode: 'production',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: fileName('js'),
    publicPath: './'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
      api: path.resolve(__dirname, 'src/api/'),
      store: path.resolve(__dirname, 'src/store/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/')
    }
  },
  devtool: devTool(),
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 1000
  },
  performance: {
    hints: false
  },
  optimization: optimization(),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [{ loader: 'file-loader' }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{ loader: 'file-loader' }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    publicPath: '/'
  },
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new HTMLWebpack({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/assets/images/favicon.png',
      minify: { collapseWhitespace: !isDevelopment }
    }),
    new BundleAnalyzer({
      analyzerMode: 'disabled',
      generateStatsFile: false,
      statsOptions: { source: false }
    })
  ]
}
