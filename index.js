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
    id: 'mobafire',
    hostname: 'mobafire.com'
    pathnames: [
      '/league-of-legends/build/:title',
    ]
  }
];

module.exports = config;