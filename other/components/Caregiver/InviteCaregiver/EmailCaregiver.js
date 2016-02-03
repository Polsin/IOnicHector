/**
 * Created by kadesilva on 10/30/15.
 */

'use strict';
angular.module('myApp.emailCaregiver', [])
    .factory('EmailCaregiver', function( $log, $resource, apiHost, authorizationToken, xUserToken, xAppId, UserSessionValidity) {

        var userDetails = UserSessionValidity.getUserDetails();

        return $resource(apiHost + '/users/pharmacist?invite=:email', {email: '@email'}, {
            save: {
                method: 'POST',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token}
            }
        });
    });
