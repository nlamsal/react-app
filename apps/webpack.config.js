const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: { // These options change how modules are resolved
        extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'], // Automatically resolve certain extensions
        alias: { // Create aliases
            images: path.resolve(__dirname, 'src/assets/images')  // src/assets/images alias
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.scss$/, // files ending with .scss
            use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({  // HMR for styles
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader', 'postcss-loader'],
            })),
        },
        {
            test: /\.css$/, // files ending with .scss
            use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({  // HMR for styles
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader', 'postcss-loader'],
            })),
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {  // images loader
                loader: 'image-webpack-loader',
                query: {
                    mozjpeg: {
                        progressive: true,
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    optipng: {
                        optimizationLevel: 4,
                    },
                    pngquant: {
                        quality: '75-90',
                        speed: 3,
                    },
                },
            }],
            exclude: /node_modules/,
            include: __dirname,
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        },
        { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&minetype=application/font-woff" }
        // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        // { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
        // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('assets/styles/styles.css'),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
        inline: true,
        open: true
    }
}

module.exports = config;


if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(), // call the uglify plugin
        new OptimizeCSSAssets()
    );
}