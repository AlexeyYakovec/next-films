/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
            },
        ],
        domains: ["image.tmdb.org", "i.ibb.co"],
    },
};

export default nextConfig;
