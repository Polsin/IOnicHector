/**
 * Created by kadesilva on 11/9/15.
 */


'use strict';

angular.module('myApp.caregiverHomeService', [])

    .factory('CaregiverHomeService', function($location, $log, CaregiverHome, toastr) {

        function getPatients(param, updateUI, hideLoading) {

            CaregiverHome.get(param, function (successResponse) {

                //$log.info(successResponse);
                updateUI(successResponse);
                hideLoading();

            }, function (res) {
                hideLoading();
                //$log.info('Error Code : ' + res.data.code);
                //$log.info('Error Message : ' + res.data.message);
                if(res.status === 401){
                    $location.url('/login');
                    toastr.warning('', 'Invalid session token, Please Re-Login.');
                }
                else if(res.data.code === 'E1007'){
                    toastr.error('', 'Patient not found.');
                }
                //return {success : false, errorCode : res.data.code, message : res.data.message};
            });
        }
        return {
            getPatients: getPatients
        };
    });