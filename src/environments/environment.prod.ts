export const environment = {
    production: true,
    API_URL: 'https://pool.elektron-net.org:40557',
    // Left empty on purpose: AppConfigService already falls back to the
    // browser's own hostname (window.location.hostname) whenever this is
    // empty, so every solo-pool deployment shows its own real domain
    // automatically instead of this repo's original demo domain.
    STRATUM_URL: '',
    SECURE_STRATUM_URL: ''
};
