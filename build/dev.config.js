var path = require("path");
var webpack = require("webpack");
var prodConfig = require("./prod.config.js");

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

var devConfig = new Object(prodConfig);
devConfig.devServer = {
    contentBase: path.join(__dirname, "../"),
    publicPath: "/dev/",
    host: "localhost",
    port: 80
};

module.exports = devConfig;