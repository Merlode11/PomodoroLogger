'use strict';
const path = require('path');

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        fallback: {
            "path": false,
            "fs": false
        }
    },
    plugins: [
    ],
};
