/**
 * Url protocol that gets registered in operating systems
 * and used to communicate beetween browsers extensions and native application
 * @type {String}
 */
export const urlProtocol = 'lolbuilder';

/**
 * List of League of Legends build guide website url's that are supported
 * Note: hostnames should have a endind slash
 * Note: pathname should start with a slash
 * Note: for pathname creation check referenced url
 * Reference: https://github.com/snd/url-pattern
 * @type {Array}
 */
export const supportedSites = [
  {
    hostname: 'mobafire.com',
    pathnames: [
      {
        module: 'mobafire',
        pathname: '/league-of-legends/build/:title'
      }
    ]
  }
];
