const { override, addBundleVisualizer, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@redux': path.resolve(__dirname, 'src/redux'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@constants': path.resolve(__dirname, 'src/constants'),
    })
);
