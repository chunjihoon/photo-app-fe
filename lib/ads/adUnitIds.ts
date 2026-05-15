import { Platform } from "react-native";
import { TestIds } from "react-native-google-mobile-ads";

/* 2026.05.14 TestFlight에서도 테스트 광고 노출 여부를 검증하기 위해 임시로 강제 활성화 by June */
const USE_TEST_ADS = true;

export const AdUnitIds = {
  banner: USE_TEST_ADS
    ? TestIds.BANNER
    : Platform.select({
        android: "YOUR_REAL_ANDROID_BANNER_AD_UNIT_ID",
        ios: "YOUR_REAL_IOS_BANNER_AD_UNIT_ID",
      })!,

  interstitial: USE_TEST_ADS
    ? TestIds.INTERSTITIAL
    : Platform.select({
        android: "YOUR_REAL_ANDROID_INTERSTITIAL_AD_UNIT_ID",
        ios: "YOUR_REAL_IOS_INTERSTITIAL_AD_UNIT_ID",
      })!,

  rewarded: USE_TEST_ADS
    ? TestIds.REWARDED
    : Platform.select({
        android: "YOUR_REAL_ANDROID_REWARDED_AD_UNIT_ID",
        ios: "YOUR_REAL_IOS_REWARDED_AD_UNIT_ID",
      })!,
};
