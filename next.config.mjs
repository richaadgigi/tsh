/** @type {import('next').NextConfig} */
import withStylexui from "@richaadgigi/stylexui/withStylexui";
const nextConfig = {
    output: 'standalone',
    compress: true,
    poweredByHeader: false,
    experimental: {
        globalNotFound: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        minimumCacheTTL: 604800, // 7 days
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                ],
            },
            {
                source: "/(.*)\\.(ico|svg|png|jpg|jpeg|webp|avif|woff2|woff|ttf)",
                headers: [
                    { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
                ],
            },
        ];
    },
};

export default withStylexui(nextConfig);
