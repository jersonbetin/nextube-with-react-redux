var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;
const dirSource = path.resolve('src');

module.exports = {
    context: dirSource,
    entry:[
        'webpack-dev-server/client?http://0.0.0.0:'+port,
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output:{
        path:dirSource,
        filename:'[name].js',
        publicPath:'/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module:{
        preLoaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' }
        ],
        loaders:[
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot-loader/webpack','babel'] },
            { test: /\.css$/, loaders: ['style-loader','css-loader']},
            { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({template: path.join(__dirname, 'build/index.html')})
    ],
    devServer: {
        hot:true,
        incline:true,
        contentBase: dirSource,
        host:'0.0.0.0',
        port: port,
        historyApiFallback: true
    }
};
