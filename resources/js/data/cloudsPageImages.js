import { localPublicUrl } from '../utils/pcsoftImages.js';

/** Images alignées sur https://pcscloud.net/UK/INDEX.awp */

const PCS_CLOUD_UK_BASE = 'https://pcscloud.net/UK';

/**
 * @param {string} publicPath
 * @param {string} remoteFile
 */
function pcscloudImage(publicPath, remoteFile) {
    return {
        src: localPublicUrl(publicPath),
        fallback: `${PCS_CLOUD_UK_BASE}/${remoteFile}`,
    };
}

export const cloudsHeroBanner = pcscloudImage('img/pcscloud/bandeau.jpg', 'bandeau.jpg');

export const cloudsAboutCloud = pcscloudImage('img/pcscloud/cloud_nuage.png', 'cloud_nuage.png');

export const cloudsServiceApplications = pcscloudImage('img/pcscloud/type_exploitation.svg', 'type_exploitation.svg');

export const cloudsServiceWebdevCluster = pcscloudImage('img/pcscloud/type_cluster.svg', 'type_cluster.svg');

export const cloudsServiceDevelopment = pcscloudImage('img/pcscloud/type_gds.svg', 'type_gds.svg');

export const cloudsServiceTelemetry = pcscloudImage('img/pcscloud/type_tlm.svg', 'type_tlm.svg');

export const cloudsServiceEmailSending = pcscloudImage('img/pcscloud/type_SMTP.svg', 'type_SMTP.svg');

export const cloudsServiceAi = pcscloudImage('img/pcscloud/type_ServiceIA.svg', 'type_ServiceIA.svg');
