import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const window = Dimensions.get('window');
export const screen = Dimensions.get('screen');

export const w = window.width;
export const h = window.height;

export const W = d => w * d / 100;
export const H = d => h * d / 100;

export const sbh = getStatusBarHeight(); //ios: durum çubuğu yükseliği, android: durum çubuğu yüksekliği
export const sbhi = getStatusBarHeight(true); //ios: durum çubuğu yükseliği, android: 0

export const OS = Platform.OS;
export const IOS = OS === 'ios';
export const AND = OS === 'android';

//export { window, screen, w, h, W, H, sbh, sbhi, OS, IOS, AND };
