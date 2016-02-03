/**
 * Created by kadesilva on 10/30/15.
 */


'use strict';

angular.module('myApp.activateUserService', [])

    .factory('ActivateUserService', function($log, ActivateUser) {

        function activateUser(params) {

            ActivateUser.save(params, function (successResponse) {

                $log.info(successResponse);

            }, function (res) {
                $log.info('Error Code : ' + res.data.code);
                $log.info('Error Message : ' + res.data.message);
            });

        };

        return {
            activateUser: activateUser
        };
    });
