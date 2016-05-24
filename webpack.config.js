var webpack = require('gulp-webpack');

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: __dirname,
        filename: "main.js",
    },
    module : {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};
