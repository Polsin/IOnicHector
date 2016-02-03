/**
 * Created by kadesilva on 11/2/15.
 */

'use strict';
angular.module('myApp.vendorHome', [])
    .factory('VendorHome', function( $log, $resource, apiHost, authorizationToken, xAppId, localStorageService) {
        var userDetails = localStorageService.get('sessionData');


        return $resource(apiHost + '/devices:id',{id: '@id'},{

            get: {
                method: 'GET',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token},
                isArray: true
            }
        });
    });