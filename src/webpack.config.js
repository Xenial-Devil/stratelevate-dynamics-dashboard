 const path = require('path')
// const webpack = require('webpack')
// const nodeGlobalsPolyfillPlugin = require('@esbuild-plugins/node-globals-polyfill')

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     resolve: {
//         alias: {
//             'src$': path.resolve(__dirname, 'src'),
//             stream: 'stream-browserify',
//             crypto: 'crypto-browserify',
//            "@src": path.resolve(__dirname, 'src'),
//             '@store': path.resolve(__dirname, 'src/redux'),
//             '@configs': path.resolve(__dirname, 'src/configs'),
//             url: 'rollup-plugin-node-polyfills/polyfills/url',
//             '@styles': path.resolve(__dirname, 'src/@core/scss'),
//             util: 'rollup-plugin-node-polyfills/polyfills/util',
//             zlib: 'rollup-plugin-node-polyfills/polyfills/zlib',
//             '@utils': path.resolve(__dirname, 'src/utility/Utils'),
//             '@hooks': path.resolve(__dirname, 'src/utility/hooks'),
//             '@assets': path.resolve(__dirname, 'src/@core/assets'),
//             '@layouts': path.resolve(__dirname, 'src/@core/layouts'),
//             assert: 'rollup-plugin-node-polyfills/polyfills/assert',
//             buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
//             process: 'rollup-plugin-node-polyfills/polyfills/process-es6',
//             '@components': path.resolve(__dirname, 'src/@core/components'),
//         }
//     },
// plugins: [
//     nodeGlobalsPolyfillPlugin({
//         buffer: true,
//         process: true
//     })
// ]
// }
const sassLoader = require('sass-loader')

module.exports = {
    module: {
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        rules: [
            {
                test: /\.scss$/,
                use: [
                    sassLoader,
                ]
            }
        ]
    }
}