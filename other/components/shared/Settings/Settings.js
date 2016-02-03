angular.module('myApp.settings',[])
    .factory('Settings' , function( $log, $resource, apiHost, authorizationToken, xAppId, UserSessionValidity) {

        var userDetails = UserSessionValidity.getUserDetails();

        return $resource(apiHost + '/users/:id/preferences', {id: '@id'}, {
            save: {
                method: 'POST',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token}
            },
            get: {
                method: 'GET',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token}
            }
        });

    });
