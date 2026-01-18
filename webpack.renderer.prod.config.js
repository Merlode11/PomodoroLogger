const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.renderer.config');
const fs = require('fs');

if (!fs.existsSync('./webpack-visualization')) {
    fs.mkdirSync('./webpack-visualization')
}

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: '../webpack-visualization/renderer.html',
            openAnalyzer: false,
        })
    ]
});
