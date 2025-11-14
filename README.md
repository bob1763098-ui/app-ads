# app-ads

Google AdMob Integration for Mobile Applications

## Overview

This repository provides a comprehensive integration solution for Google AdMob in React Native mobile applications. It includes configuration files, service classes, reusable components, and example implementations for various ad formats.

## Features

- ✅ Banner Ads
- ✅ Interstitial Ads
- ✅ Rewarded Ads
- ✅ Rewarded Interstitial Ads
- ✅ Native Advanced Ads
- ✅ Test Ad Unit IDs included
- ✅ Easy configuration management
- ✅ Singleton service pattern
- ✅ Ready-to-use components

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Install AdMob SDK

```bash
npm install react-native-google-mobile-ads
```

### 3. iOS Setup

For iOS, install CocoaPods dependencies:

```bash
cd ios
pod install
cd ..
```

Add your AdMob App ID to `ios/Runner/Info.plist`:

```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-YOUR-APP-ID~YOUR-APP-NUMBER</string>
```

### 4. Android Setup

Add your AdMob App ID to `android/app/src/main/AndroidManifest.xml`:

```xml
<meta-data
    android:name="com.google.android.gms.ads.APPLICATION_ID"
    android:value="ca-app-pub-YOUR-APP-ID~YOUR-APP-NUMBER"/>
```

## Configuration

### Update AdMob Configuration

Edit `admob.config.js` to include your actual AdMob App IDs and Ad Unit IDs:

```javascript
const AdMobConfig = {
  ios: {
    appId: 'ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY',
  },
  android: {
    appId: 'ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY',
  },
  adUnits: {
    banner: {
      ios: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
      android: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
    },
    // ... other ad units
  },
};
```

**Note:** The repository includes test Ad Unit IDs by default. These are safe to use during development but must be replaced with your production IDs before releasing your app.

## Usage

### Initialize AdMob

Initialize AdMob in your app's entry point (e.g., `App.js`):

```javascript
import AdMobService from './AdMobService';

// In your component
useEffect(() => {
  AdMobService.initialize();
}, []);
```

### Banner Ads

Use the `BannerAdComponent` to display banner ads:

```javascript
import BannerAdComponent from './components/BannerAdComponent';
import { BannerAdSize } from 'react-native-google-mobile-ads';

<BannerAdComponent 
  size={BannerAdSize.BANNER}
  position="bottom"
/>
```

### Interstitial Ads

Load and show interstitial ads:

```javascript
import AdMobService from './AdMobService';

// Load the ad
const interstitial = AdMobService.createInterstitialAd();

// Show when ready
await AdMobService.showInterstitialAd(interstitial);
```

### Rewarded Ads

Load and show rewarded ads with reward callback:

```javascript
import AdMobService from './AdMobService';

// Load the ad with reward callback
const rewarded = AdMobService.createRewardedAd((reward) => {
  console.log('User earned reward:', reward);
  // Grant reward to user
});

// Show when ready
await AdMobService.showRewardedAd(rewarded);
```

## Project Structure

```
app-ads/
├── admob.config.js          # AdMob configuration (App IDs, Ad Unit IDs)
├── AdMobService.js          # Main service class for AdMob operations
├── components/
│   └── BannerAdComponent.js # Reusable banner ad component
├── examples/
│   └── ExampleApp.js        # Example app demonstrating all ad types
├── index.js                 # Main entry point
└── package.json             # Project dependencies
```

## Ad Formats

### Banner Ads
- Standard banner advertisements
- Available sizes: BANNER, LARGE_BANNER, FULL_BANNER, MEDIUM_RECTANGLE
- Can be positioned at top or bottom of screen

### Interstitial Ads
- Full-screen ads shown at natural transition points
- Must be preloaded before showing
- Best practices: Show between app activities or game levels

### Rewarded Ads
- Full-screen ads that reward users for watching
- Users earn in-app rewards (coins, lives, etc.)
- Must implement reward callback to grant rewards

### Rewarded Interstitial Ads
- Combination of interstitial and rewarded ads
- Full-screen ads with optional rewards

### Native Advanced Ads
- Customizable ads that match app's look and feel
- Requires custom implementation based on design

## Testing

The configuration includes test Ad Unit IDs provided by Google. These IDs return test ads and are safe to use during development:

- **Always use test ads during development**
- Test ads are marked with "Test Ad" label
- Replace with production IDs before app release

## Best Practices

1. **Initialize Early**: Initialize AdMob as early as possible in your app lifecycle
2. **Preload Ads**: Load interstitial and rewarded ads before you need to show them
3. **Handle Errors**: Always implement error handling for ad loading failures
4. **User Experience**: Don't show ads too frequently - respect user experience
5. **Test Thoroughly**: Test all ad formats before releasing
6. **Follow Policies**: Ensure compliance with Google AdMob policies

## AdMob Policies

Important policies to follow:

- Never click your own ads
- Don't encourage clicks or views
- Don't place ads near clickable elements
- Respect user privacy and consent requirements (GDPR, COPPA)
- Follow content guidelines

## Resources

- [Google AdMob Documentation](https://developers.google.com/admob)
- [React Native Google Mobile Ads](https://docs.page/invertase/react-native-google-mobile-ads)
- [AdMob Policies](https://support.google.com/admob/answer/6128543)
- [Ad Unit IDs](https://support.google.com/admob/answer/7356431)

## License

MIT

## Support

For issues and questions:
- Check the [Google AdMob documentation](https://developers.google.com/admob)
- Review the [React Native Google Mobile Ads docs](https://docs.page/invertase/react-native-google-mobile-ads)
- Submit issues on the repository

---

**Note**: This is a template/starter kit. Remember to replace all test IDs with your actual AdMob IDs from the [AdMob console](https://apps.admob.com/) before releasing your application.