import fs from 'fs'
import * as path from 'path'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill'
module.exports = {
    resolve: {
        fallback: {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            fs: false,
            path: require.resolve("path-browserify"),
            os: false ,
            zlib: require.resolve("rollup-plugin-node-polyfills/polyfills/zlib"),
            url: require.resolve("rollup-plugin-node-polyfills/polyfills/url"),
            assert: require.resolve("rollup-plugin-node-polyfills/polyfills/assert"),
            buffer: require.resolve("rollup-plugin-node-polyfills/polyfills/buffer-es6"),
            process: require.resolve("rollup-plugin-node-polyfills/polyfills/process-es6"),
        }
    }
}