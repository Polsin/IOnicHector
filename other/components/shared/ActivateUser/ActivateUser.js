/**
 * Created by kadesilva on 10/30/15.
 */

'use strict';
angular.module('myApp.activateUser', [])
    .factory('ActivateUser', function( $log, $resource) {

        return $resource('http://hector-api-services-sandbox.mybluemix.net:80/api/users/:uid/patient/:id?caretaker=:email', {uid: '@uid', id: '@id',email: '@email'}, {
            save: {
                method: 'POST',
                headers: {'Authorization': 'Basic aGVjdG9yUG9ydGFsOns0YWI4NDQwZC01YjVmLTQyZTktYTY4Ni0xNjM4ODYwZDA5ZDR9', 'x-app-id': 'hectorPortal'}
            }
        });
    });
