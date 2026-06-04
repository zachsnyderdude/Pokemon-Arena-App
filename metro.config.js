const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add GLB support
config.resolver.assetExts.push('glb', 'gltf');

module.exports = config;