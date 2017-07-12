const path = require("path");
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        publicPath: "/dist/"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /(node_modules)/,
            query: {
                presets: ["es2015"]
            }
        }, {
            test: /\.hbs$/,
            loader: "handlebars-loader"
        }]
    }
};


//gulp pipe :  .앞에 있는 명령을 실행하는데 output이 나오는데 그 다음명령의 input으로 넘겨준다.

