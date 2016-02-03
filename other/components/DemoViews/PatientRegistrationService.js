/**
 * Created by kadesilva on 10/29/15.
 */


'use strict';

angular.module('myApp.patientRegistrationService', [])

    .factory('PatientRegistrationService', function($log, $location, PatientRegistration) {

        function register(params) {

            PatientRegistration.save(params, function (successResponse) {
                $log.info(successResponse);
                $location.url('/login');
            }, function (res) {
                $log.info('Error Code : ' + res.data.code);
                $log.info('Error Message : ' + res.data.message);
            });

        };

        function registerWithKey(params) {

            PatientRegistration.saveWithKey(params, function (successResponse) {
                $log.info(successResponse);
                $location.url('/login');
            }, function (res) {
                $log.info('Error Code : ' + res.data.code);
                $log.info('Error Message : ' + res.data.message);
            });

        };

        function getDetails(params, UIFunction) {

            PatientRegistration.get(params, function (successResponse) {
                $log.info(JSON.stringify(successResponse));
                UIFunction(successResponse);
            }, function (res) {
                $log.info('Error Code : ' + res.data.code);
                $log.info('Error Message : ' + res.data.message);
            });

        };

        return {
            register: register,
            registerWithKey :registerWithKey,
            getDetails : getDetails
        };
    });
