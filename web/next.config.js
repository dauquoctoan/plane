/** @type {import('next').NextConfig} */
const nextConfig = {
    mode: 'production',
    images: {
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: 'planefs.s3.us-east-1.amazonaws.com',
        //     port: '443',
        //     pathname: '/static/project-cover/**',
        //   },
        // ],
        domains: ["planefs.s3.us-east-1.amazonaws.com"]
    },
};

module.exports = nextConfig;
