// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;
// For our css modules these will be locally scoped
const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
    modules: true,
    localIdentName: '[name]_[local]_[hash:base64:5]',
    importLoaders: 2,
    camelCase:true,
    sourceMap: false, // turned off as causes delay
   }
 }
 // For our normal CSS files we would like them globally scoped
 const CSSLoader = {
    loader: 'css-loader',
    options: {
    modules: "global",
    importLoaders: 2,
    camelCase:true,
    sourceMap: false, // turned off as causes delay
   }
 }
 // Our PostCSSLoader
 const autoprefixer = require('autoprefixer')
 const PostCSSLoader = {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      sourceMap: false, // turned off as causes delay
      plugins: () => [
        autoprefixer({
         browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
        })
      ]
    }
 }
 // Standard style loader (prod and dev covered here)
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");const devMode = process.env.NODE_ENV !== 'production';
 const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};
