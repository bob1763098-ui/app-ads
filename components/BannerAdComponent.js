import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import AdMobService from '../AdMobService';

/**
 * Banner Ad Component
 * Displays a banner advertisement at the bottom or top of the screen
 */
const BannerAdComponent = ({ 
  size = BannerAdSize.BANNER,
  position = 'bottom' 
}) => {
  const adUnitId = AdMobService.getBannerAdUnitId();

  return (
    <View style={[
      styles.container,
      position === 'top' ? styles.top : styles.bottom
    ]}>
      <BannerAd
        unitId={adUnitId}
        size={size}
        requestOptions={{
          requestNonPersonalizedAdsOnly: false,
        }}
        onAdLoaded={() => {
          console.log('Banner ad loaded');
        }}
        onAdFailedToLoad={(error) => {
          console.error('Banner ad failed to load:', error);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  top: {
    top: 0,
  },
  bottom: {
    bottom: 0,
  },
});

export default BannerAdComponent;
