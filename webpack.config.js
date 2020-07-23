const path = require('path');


module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx?$/,
                include: [
                    path.resolve(__dirname, "src/app.js")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules/")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                }
            }
        ]
    }
}