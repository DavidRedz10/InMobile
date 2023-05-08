/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
module.exports = {
  reactStrictMode: true,
  images:{
    domains:['bayut-production.s3.eu-central-1.amazonaws.com','https://bitly.com/','bit.ly','freelogo-assets.s3.amazonaws.com','www.upsocl.com']   
  },
}

