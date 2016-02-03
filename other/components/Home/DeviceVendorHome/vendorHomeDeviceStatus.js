/**
 * Created by jayasaigoutheman on 12/4/15.
 */

'use strict';
angular.module('myApp.vendorHomeDeviceStatus', [])
    .factory('VendorHomeDeviceStatus', function( $log, $resource, apiHost, authorizationToken, xAppId, localStorageService) {
        var userDetails = localStorageService.get('sessionData');
        return $resource(apiHost + '/devices/:id/deviceType/:deviceType',{id: '@id' ,deviceType: '@deviceType'},{
            delete: {
                method: 'DELETE',
                headers: {'Authorization': authorizationToken, 'x-app-id': xAppId, 'x-user-token' : userDetails.token }
            }
        });

    });
