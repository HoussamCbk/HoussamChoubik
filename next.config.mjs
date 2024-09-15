import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // No need for `output: "export"` here unless static-only build is required
};

const sentryWebpackPluginOptions = {
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
