const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        bundle: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname+'/dist'
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules/')
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                exclude: path.resolve(__dirname, 'node_modules/')
            },
            {
                test: /\.(jpg|png|gif|eot|woff|svg|ttf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE.ENV':JSON.stringify('development')
        })
    ],
    devServer: {
        open: true,
        port: 9000,
        noInfo: true,
        historyApiFallback: true
    },
    resolve:{
        extensions: ['.js','.jsx']
    },
    devtool: 'eval-source-map'
}