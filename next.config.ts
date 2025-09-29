import type { NextConfig } from "next";

const { withNextVideo } = require('next-video/process');

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextVideo(nextConfig);
