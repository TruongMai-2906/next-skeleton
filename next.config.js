/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: 'localhost:3001',
  },
}
