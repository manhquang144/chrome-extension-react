const path = require("path");
const config = require("./webpack.config");

module.exports = {
    ...config,
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 8080,
    },
    devtool: "source-map",
    performance: { hints: false },
    output: { ...config.output, publicPath: "/" },
};
