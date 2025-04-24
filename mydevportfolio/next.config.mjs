/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    eslint: {
    // Dangerously allow production builds to successfully complete even if your project has eslint errors.
    ignoreDuringBuilds: true,
    },
};
export default nextConfig;

