var path = require("path");
var webpack = require("webpack");

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        index: "./src/js/index.js"
    },
    output: {
        path: path.join(__dirname, "./output"),
        filename: "[name].js"
    },
    resolve: {
    	alias: {
    		"@": resolve("src")
    	}
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
          })
    ]
};