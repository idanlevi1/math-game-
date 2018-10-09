import {
    AdMobInterstitial,
  } from 'expo';

export const adInterstitial = async() => {
    // Display an interstitial
    AdMobInterstitial.setAdUnitID('ca-app-pub-1289259032515994/9249145467');
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
}