/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config) => {
    //     config.module.rules.push({
    //         "utf-8-validate": "commonjs utf-8-validate",
    //         bufferutil: "commonjs bufferutil"
    //     });
    //     return config;
    // },
    images: {
        domains: [
            "uploadthing.com",
            "utfs.io"
        ]
    }
};

export default nextConfig;
