import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// console.log(`__filename: ${__filename}`);
// console.log(`__dirname: ${__dirname}`);
// console.log("Path.join" + path.join(__dirname));


/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputFileTracingRoot: path.join(__dirname),
        serverComponentsExternalPackages: ['pg'],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/dzth2gguw/image/upload/**',
            },
        ],
    },
};


export default nextConfig;

