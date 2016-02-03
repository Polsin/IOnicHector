/**
 * Created by inissanka
 * Date 11/02/15.
 */
'use strict';
angular.module('myApp.deviceStatusCtrl', [])
.controller('DeviceStatusCtrl', function($scope, $log, DeviceStatusService, $location, localStorageService, UserSessionValidity) {
    $scope.data = {};

    $scope.search = function () {
        var userDetails = UserSessionValidity.getUserDetails();
        DeviceStatusService.search({userId : userDetails.userId, patientId : $scope.data.patientId}, function(result){
            $scope.items = result;
        });
    };


});
