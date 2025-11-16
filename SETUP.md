# Google AdMob Setup Guide

This guide will walk you through setting up Google AdMob for your mobile application.

## Prerequisites

- Google AdMob account
- React Native development environment set up
- iOS and/or Android project

## Step 1: Create AdMob Account

1. Go to [AdMob](https://admob.google.com/)
2. Sign in with your Google account
3. Create a new AdMob account if you don't have one

## Step 2: Register Your App

1. In AdMob console, click "Apps" in the sidebar
2. Click "Add App"
3. Select your platform (iOS/Android)
4. Enter app details:
   - App name
   - Platform (iOS/Android)
   - Check if app is published (if applicable)
5. Note down your **App ID** (format: `ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY`)

## Step 3: Create Ad Units

1. After adding your app, click "Ad Units"
2. Click "Add Ad Unit"
3. Select ad format:
   - **Banner**: Small rectangular ads
   - **Interstitial**: Full-screen ads
   - **Rewarded**: Full-screen ads with rewards
   - **Native**: Customizable ads
4. Configure ad unit settings
5. Note down each **Ad Unit ID** (format: `ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY`)

## Step 4: Update Configuration

Replace the test IDs in `admob.config.js` with your actual IDs:

```javascript
const AdMobConfig = {
  ios: {
    appId: 'ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY', // Your iOS App ID
  },
  android: {
    appId: 'ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY', // Your Android App ID
  },
  adUnits: {
    banner: {
      ios: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY', // Your iOS Banner ID
      android: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY', // Your Android Banner ID
    },
    interstitial: {
      ios: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
      android: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
    },
    rewarded: {
      ios: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
      android: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',
    },
  },
};
```

## Step 5: iOS Platform Setup

### 5.1 Update Info.plist

Add your AdMob App ID to `ios/YourApp/Info.plist`:

```xml
<key>GADApplicationIdentifier</key>
<string>ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY</string>
```

### 5.2 Update Podfile (if needed)

Ensure your `ios/Podfile` has the minimum deployment target:

```ruby
platform :ios, '12.0'
```

### 5.3 Install Pods

```bash
cd ios
pod install
cd ..
```

### 5.4 App Tracking Transparency (iOS 14+)

Add to `Info.plist` for iOS 14+ to request tracking permission:

```xml
<key>NSUserTrackingUsageDescription</key>
<string>This identifier will be used to deliver personalized ads to you.</string>
```

In your app code, request tracking permission:

```javascript
import { AppTrackingTransparency } from 'react-native-tracking-transparency';

const requestTrackingPermission = async () => {
  const trackingStatus = await AppTrackingTransparency.requestTrackingPermission();
  console.log('Tracking status:', trackingStatus);
};
```

## Step 6: Android Platform Setup

### 6.1 Update AndroidManifest.xml

Add your AdMob App ID to `android/app/src/main/AndroidManifest.xml`:

```xml
<application>
  <!-- ... other elements ... -->
  
  <meta-data
      android:name="com.google.android.gms.ads.APPLICATION_ID"
      android:value="ca-app-pub-XXXXXXXXXXXXXXXX~YYYYYYYYYY"/>
      
</application>
```

### 6.2 Update build.gradle

Ensure minimum SDK version in `android/app/build.gradle`:

```gradle
android {
    defaultConfig {
        minSdkVersion 21
        // ...
    }
}
```

## Step 7: Testing

### Using Test Ads

**Important**: Always use test ad units during development!

The repository includes Google's test ad unit IDs. You can also use:
- Test device IDs to always show test ads on specific devices
- Ad Inspector for debugging

### Add Test Device

1. Run your app and check logs for device ID
2. Add device ID to `admob.config.js`:

```javascript
testDeviceIds: ['YOUR_DEVICE_ID_HERE'],
```

### Enable Ad Inspector

During development, shake your device or use:

```javascript
import mobileAds from 'react-native-google-mobile-ads';

// Open Ad Inspector
mobileAds().openAdInspector();
```

## Step 8: Compliance & Privacy

### GDPR Compliance (EU Users)

Implement consent management for EU users:

```javascript
import { AdsConsent } from 'react-native-google-mobile-ads';

const requestConsent = async () => {
  const consentInfo = await AdsConsent.requestInfoUpdate();
  
  if (consentInfo.isConsentFormAvailable) {
    const { status } = await AdsConsent.showForm();
    console.log('Consent status:', status);
  }
};
```

### COPPA Compliance (Children)

If your app targets children, update configuration:

```javascript
requestConfiguration: {
  tagForChildDirectedTreatment: true,
  tagForUnderAgeOfConsent: true,
  maxAdContentRating: 'G', // G, PG, T, or MA
},
```

## Step 9: Production Checklist

Before releasing your app:

- [ ] Replace all test Ad Unit IDs with production IDs
- [ ] Test ads on real devices
- [ ] Implement consent management (if required)
- [ ] Set appropriate content rating
- [ ] Review AdMob policies
- [ ] Enable mediation (optional)
- [ ] Set up payment information in AdMob
- [ ] Test ad serving in production mode
- [ ] Monitor metrics in AdMob dashboard

## Common Issues

### Ads Not Showing

1. **Check App ID**: Ensure correct App ID in platform configs
2. **Check Ad Unit IDs**: Verify Ad Unit IDs in config file
3. **Network Connection**: Ensure device has internet connection
4. **Fill Rate**: Not all ad requests are filled, especially in test mode
5. **Ad Frequency**: Don't request ads too frequently
6. **Console Errors**: Check logs for error messages

### Test Ads Not Showing

1. Add your device ID to test devices list
2. Verify test ad unit IDs are correct
3. Check internet connection
4. Ensure AdMob is initialized

### Production Ads Not Showing

1. Wait 24-48 hours after setting up production IDs
2. Verify payment info is set up in AdMob
3. Check ad unit status in AdMob console
4. Ensure app is compliant with policies

## Resources

- [AdMob Console](https://apps.admob.com/)
- [AdMob Help Center](https://support.google.com/admob/)
- [React Native Google Mobile Ads](https://docs.page/invertase/react-native-google-mobile-ads)
- [AdMob Policies](https://support.google.com/admob/answer/6128543)

## Support

For help with:
- **AdMob Issues**: [AdMob Support](https://support.google.com/admob/)
- **SDK Issues**: [React Native Google Mobile Ads GitHub](https://github.com/invertase/react-native-google-mobile-ads)
- **General Questions**: Check documentation or community forums
