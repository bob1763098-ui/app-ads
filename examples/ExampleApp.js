import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView } from 'react-native';
import AdMobService from '../AdMobService';
import BannerAdComponent from '../components/BannerAdComponent';
import { BannerAdSize } from 'react-native-google-mobile-ads';

/**
 * Example App Component demonstrating Google AdMob integration
 */
const ExampleApp = () => {
  const [interstitialAd, setInterstitialAd] = useState(null);
  const [rewardedAd, setRewardedAd] = useState(null);
  const [rewardEarned, setRewardEarned] = useState(false);

  useEffect(() => {
    // Initialize AdMob when component mounts
    initializeAds();
  }, []);

  const initializeAds = async () => {
    try {
      await AdMobService.initialize();
      console.log('AdMob initialized in example app');
      
      // Preload ads
      loadInterstitialAd();
      loadRewardedAd();
    } catch (error) {
      console.error('Failed to initialize ads:', error);
    }
  };

  const loadInterstitialAd = () => {
    const ad = AdMobService.createInterstitialAd();
    setInterstitialAd(ad);
  };

  const loadRewardedAd = () => {
    const ad = AdMobService.createRewardedAd((reward) => {
      console.log('Reward earned:', reward);
      setRewardEarned(true);
      setTimeout(() => setRewardEarned(false), 3000);
    });
    setRewardedAd(ad);
  };

  const handleShowInterstitial = async () => {
    const shown = await AdMobService.showInterstitialAd(interstitialAd);
    if (shown) {
      // Reload the ad for next time
      loadInterstitialAd();
    }
  };

  const handleShowRewarded = async () => {
    const shown = await AdMobService.showRewardedAd(rewardedAd);
    if (shown) {
      // Reload the ad for next time
      loadRewardedAd();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Google AdMob Example</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Banner Ad</Text>
          <Text style={styles.description}>
            Banner ad is displayed at the bottom of the screen
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interstitial Ad</Text>
          <Button 
            title="Show Interstitial Ad" 
            onPress={handleShowInterstitial}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rewarded Ad</Text>
          <Button 
            title="Show Rewarded Ad" 
            onPress={handleShowRewarded}
          />
          {rewardEarned && (
            <Text style={styles.rewardText}>🎉 Reward Earned!</Text>
          )}
        </View>
      </View>

      {/* Banner Ad at bottom */}
      <BannerAdComponent 
        size={BannerAdSize.FULL_BANNER}
        position="bottom"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 100, // Space for banner ad
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  rewardText: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ExampleApp;
