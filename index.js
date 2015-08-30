var config = {};

/**
 * Url protocol that gets registered in operating systems
 * and used to communicate beetween browsers extensions and native application
 * @type {String}
 */
config.urlProtocol = 'lolbuilder';

/**
 * List of League of Legends build guide website url's that are supported
 * @type {Array}
 */
config.supportedBuildSites = [
  {
    hostname: 'mobafire.com'
    pathnames: [
      {
        module: 'mobafire',
        path: '/league-of-legends/build/:title'
      }
    ]
  }
];

module.exports = config;