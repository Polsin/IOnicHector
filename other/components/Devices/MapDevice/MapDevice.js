/**
 * Created by kadesilva on 11/2/15.
 */

'use strict';
angular.module('myApp.mapDevice', [])
    .factory('MapDevice', function($log, $resource, apiHost, authorizationToken, xAppId, UserSessionValidity) {

        var userDetails = UserSessionValidity.getUserDetails();

        return $resource(apiHost + '/users/:uid/patient/:id/devices', {uid: '@uid', id: '@id'}, {
            save: {
                method: 'POST',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token}
            }
        });
    });
