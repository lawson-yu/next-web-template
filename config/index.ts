import getConfig from 'next/config';

const { NODE_ENV } = getConfig().publicRuntimeConfig;

console.log('NODE_ENV --------- ', NODE_ENV);

export default NODE_ENV;
