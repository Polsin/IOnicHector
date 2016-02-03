/**
 * Created by inissanka.
 * Date 10/30/15
 */

'use strict';
angular.module('myApp.getPatientDetails', [])
.factory('GetPatientDetails', function( $log, $resource, apiHost, authorizationToken, xUserToken, xAppId, UserSessionValidity) {

    var userDetails = UserSessionValidity.getUserDetails();

    return $resource(apiHost + '/patients/:patientId', {patientId: '@patientId'}, {
        get: {
            method: 'GET',
            headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token},
            isArray: false
        }
    });
    //headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token},
});
