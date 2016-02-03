/**
 * Created by kadesilva on 10/29/15.
 */

'use strict';

angular.module('myApp.pharmacistHomeService', [])

    .factory('PharmacistHomeService', function($location, $log, PharmacistHome, toastr, SwitchMedication) {

        function search(patientID, updateUI, hideLoading) {

            PharmacistHome.get({id:patientID}, function (successResponse) {

                $log.info(successResponse);
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
                else if(res.status === -1){
                    toastr.error('', 'Unable to reach server.');
                }
                else if(res.data.code === 'E1007'){
                    toastr.error('', 'Patient not found.');
                }
                else{
                    toastr.error('', 'Unexpected error. Please try again.');
                }
                //return {success : false, errorCode : res.data.code, message : res.data.message};
            });
        }

        function switchPatientMedication(params, updateUI, hideLoading){

            SwitchMedication.update(params, function (successResponse) {
                $log.info(successResponse);
                updateUI(successResponse);
                hideLoading();
                //return {success : true, userType: successResponse.userType};
            }, function (res) {
                hideLoading();
                toastr.error('', 'Invalid medication.');
                //$log.info('Error Code : ' + res.data.code);
                //$log.info('Error Message : ' + res.data.message);
                //return {success : false, errorCode : res.data.code, message : res.data.message};
            });
        }

        return {
            search: search,
            switchPatientMedication: switchPatientMedication
        };
    });