'use strict';
angular.module('myApp.login', [])
.factory('Login', function( $log, $resource, apiHost, authorizationToken, xAppId) {

    return $resource(apiHost + '/auth:id', {id: '@id'}, {
        save: {
            method: 'POST',
            headers: {'Authorization': authorizationToken, 'x-app-id': xAppId}
        }
    });
});
