# Project Structure

This document outlines the structure of the app-ads Google AdMob integration package.

## Directory Layout

```
app-ads/
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── admob.config.js            # AdMob configuration (App IDs, Ad Unit IDs)
├── AdMobService.js            # Core AdMob service class
├── index.js                   # Package entry point
├── package.json               # NPM package configuration
├── LICENSE                    # MIT License
├── README.md                  # Main documentation
├── SETUP.md                   # Platform setup guide
├── QUICKSTART.md              # Quick start guide
├── CHANGELOG.md               # Version history
├── PROJECT_STRUCTURE.md       # This file
├── components/
│   └── BannerAdComponent.js   # Reusable banner ad component
└── examples/
    └── ExampleApp.js          # Complete example implementation
```

## File Descriptions

### Core Files

#### `admob.config.js`
Configuration file containing:
- iOS and Android App IDs
- Ad Unit IDs for all ad formats (Banner, Interstitial, Rewarded, etc.)
- Test device IDs
- Request configuration (content rating, child-directed, etc.)

**Note:** Pre-configured with Google's test IDs for development.

#### `AdMobService.js`
Singleton service class providing:
- AdMob SDK initialization
- Ad Unit ID retrieval for current platform
- Interstitial ad creation and display
- Rewarded ad creation and display
- Error handling and logging

#### `index.js`
Package entry point that exports:
- AdMobService
- AdMobConfig
- BannerAdComponent

### Components

#### `components/BannerAdComponent.js`
React component for banner advertisements:
- Configurable size (BANNER, LARGE_BANNER, FULL_BANNER, etc.)
- Configurable position (top or bottom)
- Auto-loading and error handling
- Platform-aware ad unit selection

### Examples

#### `examples/ExampleApp.js`
Complete working example demonstrating:
- AdMob initialization
- Banner ad integration
- Interstitial ad loading and display
- Rewarded ad loading and display with reward callback
- UI/UX best practices

### Documentation

#### `README.md`
Comprehensive documentation including:
- Feature overview
- Installation instructions
- Usage examples for all ad types
- Project structure
- Ad format descriptions
- Best practices
- Policy guidelines

#### `SETUP.md`
Detailed setup guide covering:
- AdMob account creation
- App and ad unit registration
- iOS platform configuration
- Android platform configuration
- Testing strategies
- GDPR/COPPA compliance
- Production checklist
- Troubleshooting

#### `QUICKSTART.md`
Quick reference guide with:
- 5-minute setup instructions
- Basic usage examples
- Configuration file overview
- Next steps
- Pro tips

#### `CHANGELOG.md`
Version history documenting:
- Added features
- Changes
- Security updates
- Breaking changes

### Configuration Files

#### `package.json`
NPM package configuration with:
- Package metadata
- Dependencies (react-native-google-mobile-ads)
- Dev dependencies (eslint, jest)
- Scripts (test, lint)
- Keywords for discoverability

#### `.eslintrc.json`
ESLint configuration for code quality:
- React and React Native rules
- ES2021 environment
- JSX support
- Recommended settings

#### `.gitignore`
Git exclusions for:
- node_modules
- Build artifacts
- Platform-specific files (iOS/Android)
- IDE files
- OS files

## Usage Flow

### For New Users

1. **Start here:** `README.md` - Understand what the package does
2. **Quick setup:** `QUICKSTART.md` - Get running in 5 minutes
3. **Detailed setup:** `SETUP.md` - Full platform configuration
4. **See examples:** `examples/ExampleApp.js` - Working implementation

### For Developers

1. **Configuration:** Edit `admob.config.js` with your Ad Unit IDs
2. **Integration:** Import and use `AdMobService` in your app
3. **Components:** Use `BannerAdComponent` for quick banner ads
4. **Reference:** Check `examples/ExampleApp.js` for patterns

## Ad Types Supported

| Ad Format | Configuration Key | Component | Example |
|-----------|------------------|-----------|---------|
| Banner | `adUnits.banner` | BannerAdComponent | ExampleApp.js |
| Interstitial | `adUnits.interstitial` | AdMobService | ExampleApp.js |
| Rewarded | `adUnits.rewarded` | AdMobService | ExampleApp.js |
| Rewarded Interstitial | `adUnits.rewardedInterstitial` | AdMobService | - |
| Native Advanced | `adUnits.nativeAdvanced` | Custom | - |

## Development vs Production

### Development Mode
- Uses test Ad Unit IDs from `admob.config.js`
- Shows "Test Ad" labeled advertisements
- No real ads served
- Safe for development and testing

### Production Mode
- Requires real Ad Unit IDs from AdMob Console
- Serves real advertisements
- Generates revenue
- Must follow AdMob policies

## Security

- ✅ No vulnerabilities in dependencies
- ✅ Passes CodeQL security analysis
- ✅ No hardcoded secrets (test IDs are public)
- ✅ MIT License for open use

## Support

For questions or issues:
1. Check `README.md` for usage questions
2. Check `SETUP.md` for setup problems
3. Review `examples/ExampleApp.js` for implementation patterns
4. Visit [AdMob Documentation](https://developers.google.com/admob)
5. Check [React Native Google Mobile Ads](https://docs.page/invertase/react-native-google-mobile-ads)

## Contributing

This project follows standard JavaScript/React Native conventions:
- Use ESLint for code quality
- Follow existing code style
- Add examples for new features
- Update documentation
- Test on both iOS and Android

## License

MIT License - See `LICENSE` file for details
