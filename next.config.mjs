/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lbldztlgjscgayrjbzgx.supabase.co",
            },
        ],
    },
};

export default nextConfig;
