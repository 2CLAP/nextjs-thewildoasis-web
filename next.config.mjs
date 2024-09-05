/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sffatmpkwoaillpvtrhf.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/*",
      },
      {
        protocol: "https",
        hostname: "authjs.dev",
        port: "",
        pathname: "/img/providers/*",
      },
    ],
  },
};

export default nextConfig;
