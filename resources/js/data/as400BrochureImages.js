import { pcsoftImage } from '../utils/pcsoftImages.js';
import { homeSuiteCrossPlatform, homePackages } from './homePageImages.js';

/** Images alignées sur https://windev.com/windev/AS400 */

export { homeSuiteCrossPlatform as as400BrochureSuiteCrossPlatform };
export { homePackages as as400BrochurePackages };

const as400Img = (filename) =>
    pcsoftImage(`img/windev/as400/${filename}`, `windev/AS400/${filename}`);

export const as400BrochureWindevApp = as400Img('windev-application-on-windows-with-as400-data.jpg');
export const as400BrochureWebdevApp = as400Img('webdev-application-browser-with-as400-data.jpg');
export const as400BrochureMobileApp = as400Img('windev-mobile-application-on-tablet-with-as400-data.jpg');

export const as400BrochurePlatformSlides = [
    {
        id: 'windev',
        image: as400BrochureWindevApp,
        alt: 'Exemple d\'application WINDEV sur Windows avec des données AS/400',
    },
    {
        id: 'webdev',
        image: as400BrochureWebdevApp,
        alt: 'Exemple d\'application WEBDEV dans un navigateur avec des données AS/400',
    },
    {
        id: 'mobile',
        image: as400BrochureMobileApp,
        alt: 'Exemple d\'application WINDEV Mobile sur tablette avec des données AS/400',
    },
];

export const as400BrochureAutoStructure = as400Img('automatic-file-structure-retrieval-by-windev.jpg');
export const as400BrochureRadClientForm = as400Img('18.jpg');
export const as400BrochureAs400Job = as400Img('19.jpg');
export const as400BrochureAs400Io = as400Img('20.jpg');
export const as400BrochureQueryEditor = as400Img('25.jpg');
export const as400BrochureDeployDoc = as400Img('28.jpg');
export const as400BrochureChart3d = as400Img('50-graphe3d.jpg');
