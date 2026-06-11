import { pcsoftImage } from '../utils/pcsoftImages.js';
import { homeSuiteCrossPlatform, homePackages } from './homePageImages.js';

/** Images alignées sur https://windev.com/nativeconnectors/as400.htm */

export { homeSuiteCrossPlatform as as400SuiteCrossPlatform };

export { homePackages as as400Packages };

export const as400ArrowIcon = pcsoftImage('img/native-connectors/as400/fleche.gif', 'layout/fleche.gif');

export const as400Cover = pcsoftImage('img/native-connectors/as400/as400_h140.gif', 'couv/as400_h140.gif');

export const as400ApplicationScreenshot = pcsoftImage(
    'img/native-connectors/as400/windev-application-on-windows-with-as400-data.jpg',
    'windev/AS400/windev-application-on-windows-with-as400-data.jpg',
);
