import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const w = window.width;
const h = window.height;

const W = d => w * d / 100;
const H = d => h * d / 100;

const sbh = getStatusBarHeight(); //ios: durum çubuğu yükseliği, android: durum çubuğu yüksekliği
const sbhi = getStatusBarHeight(true); //ios: durum çubuğu yükseliği, android: 0

const OS = Platform.OS;
const IOS = OS === 'ios';
const AND = OS === 'android';

export { window, screen, w, h, W, H, sbh, sbhi, OS, IOS, AND };
