const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    devServer: {
        publicPath: '/dist/',
        hot: true,
        historyApiFallback: true,
        inline: true,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
        //这里还可以加入其它你需要的参数
    },
    entry: ["./src/app.js"],
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/dist/',
        filename: "[name].js"
    },
    module: {
        rules: [
            {// 转译js文件
                test: /\.js$/,// 匹配特定文件的正则表达式或正则表达式数组
                include: path.resolve(__dirname, 'src'),// 指定需要转译的文件夹
                exclude: path.resolve(__dirname, 'node_modules'),// 指定转译时忽略的文件夹        
                use: {
                    loader: 'babel-loader', // 依赖的loader
                    options: {
                        presets: ['env'] // 最新标准
                    }
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
            // {
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     enforce: "pre",
            //     include: [path.resolve(__dirname, 'src')], // 指定检查的目录
            // }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })
    ]
}