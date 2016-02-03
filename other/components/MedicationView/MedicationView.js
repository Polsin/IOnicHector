/**
 * Created by inissanka.
 * Date 10/30/15
 */

'use strict';
angular.module('myApp.medicationView', [])
.factory('MedicationView', function( $log, $resource, apiHost, authorizationToken, xUserToken, xAppId, UserSessionValidity) {

    var userDetails = UserSessionValidity.getUserDetails();

    return $resource(apiHost + '/patients/:patientId/medication/:medicationId', {patientId: '@patientId', medicationId: '@medicationId'}, {
        get: {
            method: 'GET',
            headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token},
            isArray: false
        }
    });
});


//patient
//medicationSchedule