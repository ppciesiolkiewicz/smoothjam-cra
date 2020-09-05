const { override, addBundleVisualizer, addWebpackAlias, useBabelRc } = require('customize-cra');
const path = require('path');

module.exports = override(
    useBabelRc(),
    process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@store': path.resolve(__dirname, 'src/store.js'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@features': path.resolve(__dirname, 'src/features'),
    })
);
