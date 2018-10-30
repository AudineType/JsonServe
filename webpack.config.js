const path = require("path")
const webpack = require("webpack")
const { VueLoaderPlugin } = require("vue-loader")

let config = /*webpack(*/{
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: "/dist/"
    },
    resolve: {
        extensions: [".js", ".jsx", ".vue"]
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ["babel-loader"],
            exclude: [/node_modules/]
        }, {
            test: /\.vue$/,
            use: ["vue-loader"],
            exclude: [/node_modules/],
        }, {
            test: /\.json$/,
            use: ["json-loader"],
            exclude: [/node_modules/],
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            exclude: [/node_modules/]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}/*)*/

module.exports = config