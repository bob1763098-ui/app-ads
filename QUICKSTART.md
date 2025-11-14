# Quick Start Guide - Google AdMob Integration

## 5-Minute Setup

### 1. Install Package
```bash
npm install
```

### 2. Initialize in Your App
```javascript
import AdMobService from './AdMobService';

// In your main app component
useEffect(() => {
  AdMobService.initialize();
}, []);
```

### 3. Add a Banner Ad
```javascript
import BannerAdComponent from './components/BannerAdComponent';

<BannerAdComponent position="bottom" />
```

### 4. Show Interstitial Ad
```javascript
import AdMobService from './AdMobService';

const ad = AdMobService.createInterstitialAd();
// Later...
await AdMobService.showInterstitialAd(ad);
```

### 5. Show Rewarded Ad
```javascript
const ad = AdMobService.createRewardedAd((reward) => {
  console.log('User earned:', reward);
});
// Later...
await AdMobService.showRewardedAd(ad);
```

## What's Included

✅ **AdMob Configuration** - Pre-configured with test IDs
✅ **Service Class** - Easy-to-use singleton pattern
✅ **Banner Component** - Drop-in React component
✅ **Full Examples** - Complete working examples
✅ **Documentation** - Detailed guides and best practices

## Configuration Files

| File | Purpose |
|------|---------|
| `admob.config.js` | Ad Unit IDs and app configuration |
| `AdMobService.js` | Core service handling all ad operations |
| `components/BannerAdComponent.js` | Reusable banner ad component |
| `examples/ExampleApp.js` | Complete example implementation |

## Testing

The package comes with **Google's test Ad Unit IDs** pre-configured. You'll see test ads immediately when running your app.

⚠️ **Important**: Replace test IDs with your production IDs before releasing!

## Next Steps

1. **Development**: Use included test IDs to develop and test
2. **Get Production IDs**: Create account at [AdMob Console](https://apps.admob.com/)
3. **Update Config**: Replace test IDs in `admob.config.js`
4. **Configure Platforms**: Follow platform-specific setup in `SETUP.md`
5. **Test**: Verify ads work on real devices
6. **Release**: Deploy your app with AdMob monetization!

## Ad Formats Available

- 🎯 **Banner Ads** - Small rectangular ads (top/bottom)
- 📱 **Interstitial Ads** - Full-screen ads between activities
- 🎁 **Rewarded Ads** - Full-screen ads with user rewards
- 🔄 **Rewarded Interstitial** - Combo of interstitial + rewards
- 🎨 **Native Advanced** - Custom-styled native ads

## Need Help?

- 📖 Read `README.md` for detailed usage
- 🛠️ Check `SETUP.md` for platform setup
- 💡 See `examples/ExampleApp.js` for complete example
- 🌐 Visit [AdMob Documentation](https://developers.google.com/admob)

## Pro Tips

1. **Preload ads** before showing them
2. **Don't spam users** with ads
3. **Test thoroughly** before releasing
4. **Follow AdMob policies** strictly
5. **Monitor performance** in AdMob dashboard

---

**Ready to monetize your app? Start with the example in `examples/ExampleApp.js`!**
