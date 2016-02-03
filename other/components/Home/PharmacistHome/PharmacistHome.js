/**
 * Created by kadesilva on 10/29/15.
 */

'use strict';
angular.module('myApp.pharmacistHome', [])
    .factory('PharmacistHome', function($log, $resource, apiHost, authorizationToken, xAppId, localStorageService) {
        var userDetails = localStorageService.get('sessionData');
        return $resource(apiHost +'/patients/:id', {id: '@id'}, {
            get: {
                method: 'GET',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token}
            }
        });
    });