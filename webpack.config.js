module.exports = {
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.less$/i,
            //     use: ['style-loader', 'css-loader', 'less-loader'],
            // },
            {
                test: /\.less$/i,
                use: ['my-style-loader', 'my-css-loader', 'my-less-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['my-style-loader', 'my-css-loader', 'my-sass-loader'],
            },
            // {
            //     test: /\.js$/i,
            //     use: ['js-loader'],
            // }
        ]
    },
    // 仅用于解析 webpack 的 loader 包
    resolveLoader: {
        modules: ['node_modules', './loaders'],
    }
}