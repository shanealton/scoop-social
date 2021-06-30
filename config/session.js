/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: 'a389eee701608da6dfa4b35dd79245b1',
  adapter: 'connect-mongo',
  url: 'mongodb://scoopadmin:H5MpW82GH4VYnws@cluster0-shard-00-00.ovtev.mongodb.net:27017,cluster0-shard-00-01.ovtev.mongodb.net:27017,cluster0-shard-00-02.ovtev.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-vc2vwh-shard-0&authSource=admin&retryWrites=true&w=majority',
  collection: 'sessions'

  /***************************************************************************
  *                                                                          *
  * Customize when built-in session support will be skipped.                 *
  *                                                                          *
  * (Useful for performance tuning; particularly to avoid wasting cycles on  *
  * session management when responding to simple requests for static assets, *
  * like images or stylesheets.)                                             *
  *                                                                          *
  * https://sailsjs.com/config/session                                       *
  *                                                                          *
  ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },

};
