/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
    optimizeFonts: false,
    images: {
        domains: ['domain.com'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    publicRuntimeConfig: {
        NODE_ENV: process.env.NODE_ENV,
    },
    webpack(config, options) {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
};

module.exports = nextConfig