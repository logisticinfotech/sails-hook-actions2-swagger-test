/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

    '/': { view: 'pages/homepage' },
    'GET /api/user/:userId': {
      action: 'api/user/index',
      swagger: {
        // tags: ['user_custome']
      }
    },

    'POST /api/v1/user': { action: 'api/user/create' },
    'PUT /api/v1/user/': { action: 'api/user/update' },
    'GET /api/v1/user/:userId': { action: 'api/user/index' },
    'GET /api/v1/user/getall': { action: 'api/user/getall' },
    'DELETE /api/v1/user/:userId': { action: 'api/user/delete' },

    'POST /api/v2/user': { action: 'api/user/create' },
    'PUT /api/v2/user/': { action: 'api/user/update' },
    'GET /api/v2/user/:userId': { action: 'api/user/index' },
    'GET /api/v2/user/getall': { action: 'api/user/getall' },
    'DELETE /api/v2/user/:userId': { action: 'api/user/delete' },
    // 'POST /api/v1/send-sms': { action: 'send-sms' },
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
