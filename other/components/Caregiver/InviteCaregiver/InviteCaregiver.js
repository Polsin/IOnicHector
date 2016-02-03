/**
 * Created by kadesilva on 10/30/15.
 */

'use strict';
angular.module('myApp.inviteCaregiver', [])
    .factory('InviteCaregiver', function( $log, $resource, apiHost, authorizationToken, xAppId, UserSessionValidity) {

        var userDetails = UserSessionValidity.getUserDetails();

        return $resource(apiHost + '/users/:uid/patient/:id?caretaker=:email', {uid: '@uid', id: '@id',email: '@email'}, {
            save: {
                method: 'POST',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token}
            }
        });
    });
