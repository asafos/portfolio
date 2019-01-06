const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    // output: !isProd ? undefined : {
    //     html: {
    //         filename: `${filePrefix}_index.html`,
    //         title: WINDOW_OBJECT_KEY
    //     },
    //     publicUrl: './',
    //     fileNames: {
    //         js: `${filePrefix}_[name].js`,
    //         css: `${filePrefix}_[name].css`,
    //     }
    // },
    // assets: {
    //     inlineImageMaxSize: 999999
    // },
    // chainWebpack(config, options) {
    //     if (options.analyze) {
    //         config.plugin('analyzer')
    //             .use(BundleAnalyzerPlugin)
    //     }
    // },
    babel: {
        transpileModules: ['@material-ui', '@int', 'react-native-base64', 'redux']
    }
};


