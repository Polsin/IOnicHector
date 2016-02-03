'use strict';
angular.module('myApp.deviceAvailability', [])
.factory('DeviceAvailability', function( $log, $resource, apiHost, authorizationToken, xAppId, UserSessionValidity) {
    var userDetails = UserSessionValidity.getUserDetails();
    return $resource(apiHost + '/devices/availability:id', {id: '@id'}, {
        save: {
            method: 'POST',
            headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token}
        }
    });
});
