/**
 * Created by kadesilva on 10/30/15.
 */

'use strict';
angular.module('myApp.addDevice', [])
    .factory('AddDevice', function( $log, $resource, apiHost, authorizationToken, xAppId, UserSessionValidity) {

        var userDetails = UserSessionValidity.getUserDetails();

        return $resource(apiHost + '/devices:id', {id: '@id'}, {
            save: {
                method: 'POST',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token}
            }
        });
    });

