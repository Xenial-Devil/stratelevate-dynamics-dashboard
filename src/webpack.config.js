module.exports = {
    resolve: {
        fallback: {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            zlib: require.resolve("zlib-browserify"),
            path: require.resolve("path-browserify")
        }
    }
}