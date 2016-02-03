/**
 * Created by inissanka.
 * Date 10/30/15
 */

'use strict';
angular.module('myApp.deviceStatus', [])
.factory('DeviceStatus', function( $log, $resource, apiHost, authorizationToken, xUserToken, xAppId, UserSessionValidity) {

    var userDetails = UserSessionValidity.getUserDetails();

    return $resource(apiHost + '/users/:userId/patient/:patientId/devices', {userId: '@userId', patientId: '@patientId'}, {
        get: {
            method: 'GET',
            headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token},
            isArray: true
        }
    });
});
