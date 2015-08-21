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
  'probuilds.net/guide/',
  'mobafire.com/league-of-legends/build/',
  'solomid.net/guide/view/',
  'lolpro.com/user-guides/',
  'lolpro.com/guides/'
];

module.exports = config;