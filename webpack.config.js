const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode:"development",
    entry: {
        "lbzx": "./src/app.js",
        "zqhl": "./src/main.js"
    },
    output: {
        publicPath: '/',
        filename: "[name].js",
        path: path.resolve(__dirname, "./dist"),
        // publicPath: 'http://cdn.com/'
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader",'postcss-loader', 'less-loader']
                })
            },
            // {
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     enforce: "pre",
            //     include: [path.resolve(__dirname, 'src')], // 指定检查的目录
            // }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',// 打包后的htmnl文件名      
            chunks: ['lbzx'],
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'zqhl.html',// 打包后的htmnl文件名  
        //     chunks: ['zqhl']
        // })

    ]
}