/**
 * Created by kadesilva on 11/2/15.
 */


'use strict';

angular.module('myApp.mapDeviceCtrl', [])
    .controller('MapDeviceCtrl', function ($scope, $location, MapDeviceService, localStorageService, toastr, DeviceAvailability) {

        $scope.data = {};
        $scope.data.devices = [];

        var addedDevicesList;
        try {
            addedDevicesList = localStorageService.get('addedDeviceListToPatient');
            if(addedDevicesList){
                $scope.data.devices = addedDevicesList;
            }
        }
        catch(err) {}


        $scope.mapDevice = function () {

            if(!$scope.data.macAddress){
                toastr.error('','Please enter a MAC address.');
            }else if(!$scope.data.deviceType){
                toastr.error('','Please select a device type.');
            }else{
                var deviceType;
                if($scope.data.deviceType === 'blister-pack'){
                    deviceType = 'fsbl';
                }
                else{
                    deviceType = $scope.data.deviceType;
                }

                DeviceAvailability.save({'deviceType' : deviceType, 'macAddress' : $scope.data.macAddress}, function (successResponse) {
                    if(successResponse.isAvailable){
                        $scope.data.devices.push({'deviceType' : $scope.data.deviceType, 'macAddress' : $scope.data.macAddress});
                        toastr.success('', 'Device Added.');
                        $scope.data.deviceType = '';
                        $scope.data.macAddress = '';
                    }
                    else{
                        toastr.error('', 'Device Not Found.');
                    }
                }, function (res) {
                    toastr.error('', 'Device Not Found.');
                });

                /*var sessionData = localStorageService.get("sessionData");
                var patientID = localStorageService.get("patientID");
                MapDeviceService.mapDevice({
                    id: patientID,
                    uid: sessionData.userId,
                    "deviceType": $scope.data.deviceType,
                    "macAddress": $scope.data.macAddress
                },function(){
                    $scope.data.devices.push({
                        deviceType : $scope.data.deviceType,
                        macAddress : $scope.data.macAddress
                    });
                });*/

            }

        };

        $scope.gotoFinalReview = function(){
            localStorageService.set("addedDeviceListToPatient",  $scope.data.devices);
            if($scope.data.devices.length > 0){
                $location.url('/medicationView');
            }else{
                toastr.error('', 'Please add devices.');
            }
        };

        $scope.skipStep = function(){
            $location.url('/medicationView');
        };


    }
);