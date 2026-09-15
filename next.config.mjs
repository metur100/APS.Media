/**
 * APS Media - static export config for GitHub Pages.
 * Set NEXT_PUBLIC_BASE_PATH="/repo-name" when deploying to
 * https://<user>.github.io/<repo-name>. Leave empty for a custom domain
 * or for a <user>.github.io root repository.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
