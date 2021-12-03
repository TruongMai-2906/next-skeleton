/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n.config')

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: 'localhost:3001',
  },
  i18n,
}
