/**
 * Created by inissanka on 10/29/15.
 */

'use strict';
angular.module('myApp.deviceStatusService', [])
.factory('DeviceStatusService', function($location, $log, DeviceStatus) {

    function search(params, updateUI, hideLoading) {
        //var result = [{ "deviceType" : "Smart Communicator", "active" : true}, { "deviceType" : "Smart Blister Pack", "active" : false}];
        //updateUI(result);
        DeviceStatus.get(params, function (successResponse) {
            $log.info(successResponse);

            var result = [];
            successResponse.forEach(function(entry) {
                result.push({ "deviceType" : entry.type, "active" : entry.active, "patientId" : entry.patientId, "pingDateTime" : entry.pingDateTime, "macAddress": entry.macAddress});
            });
            updateUI(result);
            hideLoading();

        }, function (res) {
            hideLoading();
            $log.info('Error Code : ' + res.data.code);
            $log.info('Error Message : ' + res.data.message);
            //return {success : false, errorCode : res.data.code, message : res.data.message};
        });
    }

    return {
        search: search
    };
});