/**
 * Created by kadesilva on 11/2/15.
 */


'use strict';

angular.module('myApp.mapDeviceService', [])

    .factory('MapDeviceService', function($log, MapDevice, toastr) {

        function mapDevice(params, updateUi) {

            MapDevice.save(params, function (successResponse) {
                $log.info(successResponse);
                toastr.success('','Device Added Successfully.');
                updateUi(successResponse);
            }, function (res) {
                if(res.data.code === 'E1014'){
                    toastr.error('','Device Not Found.');
                }
                if(res.data.code === 'E1022'){
                    toastr.error('','Device Already Registered.');
                }
                $log.info('Error Code : ' + res.data.code);
                $log.info('Error Message : ' + res.data.message);
            });

        };

        return {
            mapDevice: mapDevice
        };
    });
