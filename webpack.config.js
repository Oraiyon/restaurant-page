const path = require("path");
const HtmlWebpackPlugin= require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "[name][ext]"
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title:"Restaurant Page",
            filename: "index.html",
            template: "src/template.html"
        }),
    ],
};