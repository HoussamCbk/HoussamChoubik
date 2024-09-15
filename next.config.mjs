import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Explicitly define export to be injected correctly
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

// Use withSentryConfig to wrap the nextConfig, keeping all properties
export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
