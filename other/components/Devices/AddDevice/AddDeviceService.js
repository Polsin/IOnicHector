/**
 * Created by kadesilva on 10/30/15.
 */

'use strict';

angular.module('myApp.addDeviceService', [])

    .factory('AddDeviceService', function($log, AddDevice, toastr) {

        function addDevice(params, updateUI, hideLoading) {

            AddDevice.save(params, function (successResponse) {
                toastr.success('', 'Device added successfully.');
                if(successResponse.type === "smart-communicator"){
                    toastr.success('', 'Communicator Security Token: .' + successResponse.mqttConfig.securityToken);
                }
                $log.info(successResponse);
                updateUI(successResponse);
                hideLoading();
                //return {success : true, userType: successResponse.userType};
            }, function (res) {
                toastr.error('', 'Error while adding device.');
                hideLoading();
                $log.info('Error Code : ' + res.data.code);
                $log.info('Error Message : ' + res.data.message);
                //return {success : false, errorCode : res.data.code, message : res.data.message};
            });
        };

        return {
            addDevice: addDevice
        };
    });
