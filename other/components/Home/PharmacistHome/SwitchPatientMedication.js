/**
 * Created by kadesilva on 10/29/15.
 */

'use strict';
angular.module('myApp.switchMedication', [])
    .factory('SwitchMedication', function($log, $resource, apiHost, authorizationToken, xAppId, UserSessionValidity) {
        var userDetails = UserSessionValidity.getUserDetails();
        return $resource(apiHost + '/patients/:patientId/medication/:fileNumber', {patientId: '@patientId', fileNumber: '@fileNumber'}, {
            update: {
                method: 'PUT',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token}
            }
        });
    });