import packageJson from './package.json' with { "type": "json" }

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    env: {
        VERSION: packageJson.version,
    }
};

export default nextConfig;