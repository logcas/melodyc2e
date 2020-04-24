const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const UploadStaticWebpackPlugin = require('static-upload-plugin');

module.exports = {
    publicPath: 'http://static-cdn.lxzmww.xyz/melody_frontend/',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    },
    configureWebpack: {
        plugins: [
            new UploadStaticWebpackPlugin({
                provider: 'qiniu',
                config: {
                  accessKey: 'J0FO2jLgYqr4GBZ3ORVNRCuAxVfM6P1dNgXMbdZV',
                  secretKey: 'Bv5qcNspqLXKNgeCrZY3NfvEcwLmN0UhVWD3pcC5',
                  bucket: 'lucaspic'
                },
                path: '/melody_frontend/'
            })
        ]
    }
}