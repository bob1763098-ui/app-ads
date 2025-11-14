import { Platform } from 'react-native';
import mobileAds, {
  BannerAd,
  BannerAdSize,
  TestIds,
  InterstitialAd,
  RewardedAd,
  RewardedAdEventType,
  AdEventType,
} from 'react-native-google-mobile-ads';
import AdMobConfig from './admob.config';

class AdMobService {
  static instance = null;
  isInitialized = false;

  constructor() {
    if (AdMobService.instance) {
      return AdMobService.instance;
    }
    AdMobService.instance = this;
  }

  /**
   * Initialize AdMob SDK
   */
  async initialize() {
    if (this.isInitialized) {
      console.log('AdMob already initialized');
      return;
    }

    try {
      await mobileAds().initialize();
      
      // Configure request settings
      await mobileAds().setRequestConfiguration({
        maxAdContentRating: AdMobConfig.requestConfiguration.maxAdContentRating,
        tagForChildDirectedTreatment: AdMobConfig.requestConfiguration.tagForChildDirectedTreatment,
        tagForUnderAgeOfConsent: AdMobConfig.requestConfiguration.tagForUnderAgeOfConsent,
        testDeviceIdentifiers: AdMobConfig.testDeviceIds,
      });

      this.isInitialized = true;
      console.log('AdMob initialized successfully');
    } catch (error) {
      console.error('Failed to initialize AdMob:', error);
      throw error;
    }
  }

  /**
   * Get Banner Ad Unit ID for current platform
   */
  getBannerAdUnitId() {
    return Platform.select({
      ios: AdMobConfig.adUnits.banner.ios,
      android: AdMobConfig.adUnits.banner.android,
    });
  }

  /**
   * Get Interstitial Ad Unit ID for current platform
   */
  getInterstitialAdUnitId() {
    return Platform.select({
      ios: AdMobConfig.adUnits.interstitial.ios,
      android: AdMobConfig.adUnits.interstitial.android,
    });
  }

  /**
   * Get Rewarded Ad Unit ID for current platform
   */
  getRewardedAdUnitId() {
    return Platform.select({
      ios: AdMobConfig.adUnits.rewarded.ios,
      android: AdMobConfig.adUnits.rewarded.android,
    });
  }

  /**
   * Create and load an Interstitial Ad
   */
  createInterstitialAd() {
    const adUnitId = this.getInterstitialAdUnitId();
    const interstitial = InterstitialAd.createForAdRequest(adUnitId);
    
    interstitial.addAdEventListener(AdEventType.LOADED, () => {
      console.log('Interstitial ad loaded');
    });

    interstitial.addAdEventListener(AdEventType.ERROR, (error) => {
      console.error('Interstitial ad error:', error);
    });

    interstitial.load();
    return interstitial;
  }

  /**
   * Create and load a Rewarded Ad
   */
  createRewardedAd(onReward) {
    const adUnitId = this.getRewardedAdUnitId();
    const rewarded = RewardedAd.createForAdRequest(adUnitId);

    rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      console.log('Rewarded ad loaded');
    });

    rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
      console.log('User earned reward:', reward);
      if (onReward) {
        onReward(reward);
      }
    });

    rewarded.addAdEventListener(AdEventType.ERROR, (error) => {
      console.error('Rewarded ad error:', error);
    });

    rewarded.load();
    return rewarded;
  }

  /**
   * Show an Interstitial Ad
   */
  async showInterstitialAd(interstitial) {
    if (!interstitial) {
      console.warn('Interstitial ad not created');
      return false;
    }

    try {
      if (interstitial.loaded) {
        await interstitial.show();
        return true;
      } else {
        console.warn('Interstitial ad not loaded yet');
        return false;
      }
    } catch (error) {
      console.error('Error showing interstitial ad:', error);
      return false;
    }
  }

  /**
   * Show a Rewarded Ad
   */
  async showRewardedAd(rewarded) {
    if (!rewarded) {
      console.warn('Rewarded ad not created');
      return false;
    }

    try {
      if (rewarded.loaded) {
        await rewarded.show();
        return true;
      } else {
        console.warn('Rewarded ad not loaded yet');
        return false;
      }
    } catch (error) {
      console.error('Error showing rewarded ad:', error);
      return false;
    }
  }
}

// Export singleton instance
export default new AdMobService();
