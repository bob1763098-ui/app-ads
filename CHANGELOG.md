# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-14

### Added
- Initial Google AdMob integration package
- `AdMobService.js` - Core service class for managing AdMob operations
- `admob.config.js` - Configuration file with test Ad Unit IDs for all ad formats
- `components/BannerAdComponent.js` - Reusable React component for banner ads
- `examples/ExampleApp.js` - Complete example app demonstrating all ad types
- `index.js` - Main entry point for the package
- `package.json` - Project configuration with dependencies
- `README.md` - Comprehensive documentation and usage guide
- `SETUP.md` - Detailed setup instructions for iOS and Android
- `QUICKSTART.md` - Quick reference guide for rapid development
- `LICENSE` - MIT License
- `.gitignore` - Git ignore configuration
- `.eslintrc.json` - ESLint configuration for code quality

### Features
- Support for Banner Ads
- Support for Interstitial Ads
- Support for Rewarded Ads
- Support for Rewarded Interstitial Ads
- Support for Native Advanced Ads
- Singleton service pattern for easy integration
- Pre-configured with Google's test Ad Unit IDs
- Platform-specific ad unit handling (iOS/Android)
- Error handling and logging
- Test device configuration support
- GDPR and COPPA compliance ready
- Content rating configuration

### Documentation
- Comprehensive README with usage examples
- Step-by-step setup guide for both platforms
- Quick start guide for rapid development
- Code comments and JSDoc-style documentation
- Best practices and policy guidelines
- Troubleshooting section

### Security
- No vulnerabilities in dependencies
- Passes CodeQL security analysis
- MIT License for open-source use

[1.0.0]: https://github.com/bob1763098-ui/app-ads/releases/tag/v1.0.0
