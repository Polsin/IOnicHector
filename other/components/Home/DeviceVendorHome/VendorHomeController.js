/**
 * Created by kadesilva on 11/2/15.
 */


'use strict';

angular.module('myApp.vendorHomeCtrl', [])
    .controller('VendorHomeCtrl', function($scope, VendorHomeService,  $location, localStorageService, AddDeviceService, toastr) {

        $scope.devices =[];
        $scope.data = {};
        $scope.data.patientDeviceList = [];
        $scope.data.screenTitle = "Vendor Portal";
        $scope.showUserIcon = true;

        $scope.showLoading = true;

        var sessionData = localStorageService.get("sessionData");
        $scope.userName = sessionData.userName;

        VendorHomeService.getDevices(function(response){
            $scope.devices = response;

            var deviceList = [];
            response.forEach(function(device) {
                var deviceTypeString;
                if(device.type === 'smart-communicator'){
                    deviceTypeString = "Communicator";
                }
                else if(device.type === 'fsbl'){
                    deviceTypeString = "Blister Pack";
                }
                else{
                    deviceTypeString = device.type;
                }
                deviceList.push({"deviceTypeString": deviceTypeString, "deviceType" : device.type, "active" : device.active, "macAddress": device._id, "assignee" : device.assignee});
            });

            $scope.data.patientDeviceList = deviceList;
            $scope.isDeviceListAvailable = true;
            $scope.showLoading = false;


            //$scope.isDevicesAvailable  = false;

            //check if devicelist is empty
            if($scope.data.patientDeviceList.length !== 0){
                $scope.isDeviceListAvailable = true;
            }else{
                $scope.isDeviceListAvailable = false;
            }

        },function(){
            $scope.showLoading = false;
        });

        /*$scope.addDevice = function () {
            $location.url('/addDevice');
        };*/

        $scope.addDevice = function () {

            if(!$scope.data.deviceType){
                toastr.error('','Please select a device type');
            }
            else if($scope.data.deviceType === 'smart-communicator'){
                $scope.showLoading = true;
                AddDeviceService.addDevice({
                    "deviceType":$scope.data.deviceType,
                    "macAddress":$scope.data.macAddress
                },function(res){
                    //toastr.error('', 'Please enter a email address.');
                    var deviceTypeString;
                    if($scope.data.deviceType === 'smart-communicator'){
                        deviceTypeString = "Communicator";
                    }
                    else if($scope.data.deviceType === 'fsbl'){
                        deviceTypeString = "Blister Pack";
                    }
                    else{
                        deviceTypeString = device.type;
                    }
                    $scope.data.patientDeviceList.push({"deviceTypeString": deviceTypeString, "deviceType" : $scope.data.deviceType, "macAddress": $scope.data.macAddress});

                    $scope.data.deviceType = '';
                    $scope.data.macAddress = '';
                    $scope.data.securityToken = res.mqttConfig.securityToken;
                    $scope.data.showResult = true;
                },function(){
                    $scope.showLoading = false;
                });
            }
            else{
                toastr.warning('','Sorry ! you can only add Smart communicators');
            }
        };

        $scope.removeDevice = function (selectedDeviceId , selectedDeviceType) {
            //alert(selectedDeviceId + " - " + selectedDeviceType);

            //define parameters to be sent
            var params = {
                id:selectedDeviceId,
                deviceType: selectedDeviceType
            };

            VendorHomeService.changeDeviceStatus(params, function(res){

                console.log("Remove device Success");

            },function(){
                console.log("Remove device Failure");
            });


        };



    }
);
