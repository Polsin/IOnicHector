/**
 * Created by kadesilva on 10/29/15.
 */

'use strict';
angular.module('myApp.patientRegistration', [])
    .factory('PatientRegistration', function( $log, $resource, apiHost, authorizationToken, xAppId) {

        return $resource(apiHost + '/users/:id?activation=:activationKey', {id: '@id',activationKey:'@activationKey'}, {
            save: {
                method: 'POST',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId}
            },
            saveWithKey:{
                method: 'PUT',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId}
            },
            get:{
                method: 'GET',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId},
                isArray: false
            }
        });
    });
