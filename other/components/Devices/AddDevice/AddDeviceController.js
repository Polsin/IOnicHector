/**
 * Created by kadesilva on 10/30/15.
 */


'use strict';
angular.module('myApp.addDeviceCtrl', [])
    .controller('AddDeviceCtrl', function($scope, $log, AddDeviceService) {

        $scope.data = {};
        $scope.data.showResult = false;
        $scope.showLoading = false;

        $scope.addDevice = function () {

            $log.info($scope.data.deviceType);
            $log.info($scope.data.macAddress);
            $scope.showLoading = true;
            AddDeviceService.addDevice({
                "deviceType":$scope.data.deviceType,
                "macAddress":$scope.data.macAddress
            },function(res){
                $scope.data.securityToken = res.mqttConfig.securityToken;
                $scope.data.showResult = true;
            },function(){
                $scope.showLoading = false;
            });

        };
    });
