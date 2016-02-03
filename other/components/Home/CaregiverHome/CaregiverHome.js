
'use strict';
angular.module('myApp.caregiverHome', [])
    .factory('CaregiverHome', function($log, $resource, apiHost, authorizationToken, xAppId, UserSessionValidity) {


        var userDetails = UserSessionValidity.getUserDetails();

        return $resource(apiHost +'/users/:id/patients', {id: '@id'}, {
            get: {
                method: 'GET',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token},
                isArray: true
            }
        });
    });