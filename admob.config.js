// AdMob Configuration
// Update these values with your actual AdMob app and ad unit IDs

const AdMobConfig = {
  // AdMob App IDs
  ios: {
    appId: 'ca-app-pub-3940256099942544~1458002511', // Test App ID for iOS
  },
  android: {
    appId: 'ca-app-pub-3940256099942544~3347511713', // Test App ID for Android
  },

  // Ad Unit IDs
  adUnits: {
    // Banner Ad Unit IDs
    banner: {
      ios: 'ca-app-pub-3940256099942544/2934735716',
      android: 'ca-app-pub-3940256099942544/6300978111',
    },
    // Interstitial Ad Unit IDs
    interstitial: {
      ios: 'ca-app-pub-3940256099942544/4411468910',
      android: 'ca-app-pub-3940256099942544/1033173712',
    },
    // Rewarded Ad Unit IDs
    rewarded: {
      ios: 'ca-app-pub-3940256099942544/1712485313',
      android: 'ca-app-pub-3940256099942544/5224354917',
    },
    // Rewarded Interstitial Ad Unit IDs
    rewardedInterstitial: {
      ios: 'ca-app-pub-3940256099942544/6978759866',
      android: 'ca-app-pub-3940256099942544/5354046379',
    },
    // Native Advanced Ad Unit IDs
    nativeAdvanced: {
      ios: 'ca-app-pub-3940256099942544/3986624511',
      android: 'ca-app-pub-3940256099942544/2247696110',
    },
  },

  // Test Device IDs (add your test device IDs here)
  testDeviceIds: [],

  // Request Configuration
  requestConfiguration: {
    maxAdContentRating: 'PG', // 'G', 'PG', 'T', 'MA'
    tagForChildDirectedTreatment: false,
    tagForUnderAgeOfConsent: false,
  },
};

export default AdMobConfig;
