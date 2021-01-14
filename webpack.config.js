const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {

    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const babelOptions = preset => {
    const opts = {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime']
    }

    if (preset) {
        opts.presets.push(preset)
    }

    return opts
}


const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions()
    }]

    if (isDev) {
        loaders.push('eslint-loader')
    }

    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.ts',
        api: './api/index.ts',
        apiContacts: './api/contacts.ts',
        store: './store/index.ts',
        storeReducersContacts: './store/reducers/contacts.ts',
        storeActionsContacts: './store/actions/contacts.ts',
        events: './events/index.ts',
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.ts', '.json'],
        fallback: {
            "os": false,
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "crypto-browserify": false,
            "util": false,
            "assert": false
        },
        alias: {
            src: path.resolve(__dirname, 'src'),
            styles: path.resolve(__dirname, 'src', 'styles'),
            components: path.resolve(__dirname, 'src', 'components'),
            pages: path.resolve(__dirname, 'src', 'pages'),
            store: path.resolve(__dirname, 'src', 'store'),
            helpers: path.resolve(__dirname, 'src', 'helpers'),
            utils: path.resolve(__dirname, 'src', 'utils'),
            api: path.resolve(__dirname, 'src', 'api')
        },
    },
    optimization: optimization(),
    devServer: {
        historyApiFallback: true,
        port: 4000,
        hot: isDev
    },
    externals: [
        'child_process'
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            templateParameters(compilation, assets, options) {
                return {
                    compilation: compilation,
                    webpack: compilation.getStats().toJson(),
                    webpackConfig: compilation.options,
                    htmlWebpackPlugin: {
                        files: assets,
                        options: options
                    },
                    process,
                };
            },
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true
            },
            nodeModules: false
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    }
}