/**
 * Created by inissanka
 * Date 11/02/15.
 */


'use strict';
angular.module('myApp.recipes', [])
.factory('Recipes', function( $log, $resource, apiHost, authorizationToken, xAppId) {
    var userDetails = localStorageService.get('sessionData');
    return $resource(apiHost + '/auth:id', {id: '@id'}, {
        save: {
            method: 'POST',
            headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token}
        }
    });
});