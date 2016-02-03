/**
 * Created by kadesilva on 11/2/15.
 */


'use strict';

angular.module('myApp.vendorHomeService', [])

    .factory('VendorHomeService', function($log, VendorHome, $location , VendorHomeDeviceStatus) {

        function getDevices(updateUI,hideLoading) {

            VendorHome.get({}, function (successResponse) {
                //$log.info(successResponse);
                updateUI(successResponse);
                hideLoading();
                //return {success : true, userType: successResponse.userType};
            }, function (res) {
                hideLoading();
                if(res.status === 401){
                    $location.url('/login');
                    toastr.warning('', 'Invalid session token, Please Re-Login.');
                }
                //$log.info('Error Code : ' + res.data.code);
                //$log.info('Error Message : ' + res.data.message);
                //return {success : false, errorCode : res.data.code, message : res.data.message};
            });
        };


        function changeDeviceStatus(params){

            VendorHomeDeviceStatus.delete(params , function(sucessResponse){

               // updateUI(sucessResponse);
                alert(sucessResponse);

                //getDevices()

            } , function (res){

                console.dir(res);

                if(res.status === 401){
                    $location.url('/login');
                    toastr.warning('', 'Invalid session token, Please Re-Login.');
                }

            });

        }

        return {
            getDevices: getDevices,
            changeDeviceStatus :changeDeviceStatus
        };
    });
