/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.imgur.com", "a0.muscache.com", "links.papareact.com", "www.rebrand.ly", "imgur.com"]
  },
  env: {
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  },
}

module.exports = nextConfig
