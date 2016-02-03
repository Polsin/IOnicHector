'use strict';

angular.module('myApp.pharmacistHomeCtrl', [])
.controller('PharmacistHomeCtrl', function($scope, $log, $location, PharmacistHomeService, UserSessionValidity, EmailCaregiver, localStorageService, DeviceStatus, toastr, InviteCaregiverService, PatientHomeService, AddDeviceService, DeviceAvailability, MapDeviceService, MedicationViewService, DeviceStatusService) {

        $scope.data = {};
        $scope.data.patientCaregiversList = [];
        $scope.data.patientDeviceList = [];
        //UserSessionValidity.validSession();
        $scope.isSearchView = true;
        $scope.isDetailView = false;
        $scope.isPatientMedicationAvailable = false;
        $scope.showLoading = false;
        $scope.showUserIcon = true;
        $scope.data.deviceType = 'fsbl';
        $scope.viewPatientDetails = true;

        var sessionData = localStorageService.get("sessionData");
        $scope.data.userName = sessionData.userName;

        var queryParams = $location.search();

        var patientDetails = {};

        var patientDetailSearchData;

        $scope.caregiverLookup = function (emailAddress){
            if($scope.data.patientCaregiversList){
                var filtered = $scope.data.patientCaregiversList.filter(function(x) {
                    if(x.email && x.email === emailAddress){
                        return x;
                    }
                });
                if(filtered && filtered.length > 0){
                    return true;
                }
                else{
                    return false;
                }
            }
        };

        $scope.search = function () {

            $scope.showLoading = true;

            // save patient ID
            localStorageService.set("patientID", $scope.data.patientId);

            PharmacistHomeService.search($scope.data.patientId, function(response){
                patientDetails = response;
                $scope.data.patientDetails = {};
                $scope.data.patientDetails.patientName = response.firstName + " "+ response.lastName;
                $scope.data.patientDetails.patientDob = new Date(response.dateOfBirth);
                $scope.data.patientDetails.streetName = response.address.streetName + ", ";
                $scope.data.patientDetails.city = response.address.city + ", ";
                $scope.data.patientDetails.state = response.address.state + ", ";
                $scope.data.patientDetails.zipCode = response.address.zipCode;
                $scope.data.patientDetails.patientPhone = response.phoneNo;
                $scope.data.patientDetails.email = response.email;
                $scope.data.patientDetails.patientId = response.patientId;
                $scope.data.patientDetails.isRegistered = patientDetails.isRegistered;

                $scope.isSearchView = false;
                $scope.isDetailView = true;
                //localStorageService.set("patientDetailSearchData",  $scope.data);
                //$scope.patientDetailSearchData = $scope.data;

                localStorageService.set("patientDetails", {"patientID": $scope.data.patientId, "patientName" : $scope.data.patientName});
                if(queryParams.initialLoad){
                    $location.url('/pharmacist?initialLoad=off');
                }
            },function(){
                $scope.showLoading = false;
            });
            var sessionData = localStorageService.get('sessionData');

            DeviceStatusService.search({"userId":sessionData.userId, "patientId":$scope.data.patientId}, function(result){
                $log.info(result);
                var deviceList = [];
                result.forEach(function(device) {
                    var deviceTypeString;
                    if(device.deviceType === 'smart-communicator'){
                        deviceTypeString = "Communicator";
                    }
                    else if(device.deviceType === 'fsbl'){
                        deviceTypeString = "Blister Pack";
                    }
                    else{
                        deviceTypeString = device.type;
                    }
                    deviceList.push({"deviceTypeString": deviceTypeString, "deviceType" : device.deviceType, "active" : device.active, "patientId" : device.patientId, "macAddress": device.macAddress, "pingDateTime": device.pingDateTime});
                });

                $scope.data.patientDeviceList = deviceList;
                $scope.isDeviceListAvailable = true;
            }, function(){});

            PatientHomeService.getCaregiversList({"patientId" :$scope.data.patientId}, function(res){
                $scope.data.patientCaregiversList = res;
            });

            MedicationViewService.search({"patientId" : $scope.data.patientId, "medicationId" : 'active'}, function(result){
                $scope.data.patientActiveMedication = result;
                $scope.isPatientMedicationAvailable = true;
                $scope.showLoading = false;
            });

        };

        $scope.addCaregiver = function(){
            $scope.showLoading = true;
            if(!$scope.data.caregiverEmailAddress){
                toastr.error('', 'Please enter a email address.');
                $scope.showLoading = false;
            }
            else if(!validateEmail($scope.data.caregiverEmailAddress)){
                toastr.error('', 'Please enter valid email address.');
                $scope.showLoading = false;
            }
            else if($scope.caregiverLookup($scope.data.caregiverEmailAddress)){
                toastr.error('', 'Email already exist.');
                $scope.showLoading = false;
            }
            else{
                var sessionData = localStorageService.get("sessionData");
                var patientID = localStorageService.get("patientID");

                InviteCaregiverService.addCareTaker({ "id":patientID, "uid": sessionData.userId, "email":$scope.data.caregiverEmailAddress},
                function(res){
                    $scope.data.patientCaregiversList.push({"email" : $scope.data.caregiverEmailAddress});
                    $scope.data.caregiverEmailAddress ="";
                    $scope.showLoading = false;
                });
            };
        };

        $scope.mapDevice = function(){
            var validPost = true;
            $scope.showLoading = true;
            if(!$scope.data.deviceMacAddress){
                toastr.error('','Please enter a MAC address.');
                validPost = false;
            }
            if(!$scope.data.deviceType){
                toastr.error('','Please select a device type.');
                validPost = false;
            }
            if($scope.data.deviceType === 'not-available'){
                toastr.warning('','Device type is not supported.');
                validPost = false;
            }

            if(validPost){

                DeviceAvailability.save({'deviceType' : $scope.data.deviceType, 'macAddress' : $scope.data.deviceMacAddress}, function (successResponse) {
                    if(successResponse.isAvailable){

                        var sessionData = localStorageService.get("sessionData");
                        MapDeviceService.mapDevice({
                            id: $scope.data.patientId,
                            uid: sessionData.userId,
                            "deviceType": $scope.data.deviceType,
                            "macAddress": $scope.data.deviceMacAddress
                        },function(){
                            var deviceTypeString;
                            if($scope.data.deviceType === 'smart-communicator'){
                                deviceTypeString = "Communicator";
                            }
                            else if($scope.data.deviceType === 'fsbl'){
                                deviceTypeString = "Blister Pack";
                            }
                            else{
                                deviceTypeString = $scope.data.deviceType;
                            }
                            $scope.data.patientDeviceList.push({"deviceTypeString": deviceTypeString, "deviceType" : $scope.data.deviceType, "active" : false, "patientId" : $scope.data.patientId, "macAddress": $scope.data.deviceMacAddress});

                            toastr.success('', 'Device Added.');
                            $scope.data.deviceType = '';
                            $scope.data.deviceMacAddress = '';
                            $scope.showLoading = false;
                        });
                    }
                    else{
                        toastr.error('', 'Device is Not Available.');
                    }
                }, function (res) {
                    toastr.error('', 'Device is Not Available.');
                });
            }
            else{
                $scope.showLoading = false;
            }
        };

        function validateEmail(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        };

        $scope.addMedicationNumber = function(){
            $scope.showLoading = true;
            PharmacistHomeService.switchPatientMedication({
                "patientId":$scope.data.patientId,
                "fileNumber":$scope.data.medicationFileNumber
            },function(res){
                toastr.success('', 'Medication added successfully.');
                $scope.showLoading = true;
                $scope.data.patientActiveMedication.fileNumber = $scope.data.medicationFileNumber;
                MedicationViewService.search({"patientId" : $scope.data.patientId, "medicationId" : 'active'}, function(result){
                    $scope.data.patientActiveMedication = result;
                    $scope.isPatientMedicationAvailable = true;
                    $scope.showLoading = false;
                });
            },function(){
                $scope.showLoading = false;
            });
        };

        $scope.showDetails = function(section){
            if(section === 'patient'){
                $scope.viewPatientDetails = true;
                $scope.viewAdherenceDetails = false;
            }
            else if(section === 'adherence'){
                $scope.viewPatientDetails = true;
                $scope.viewAdherenceDetails = false;
            }
        };

        $scope.viewMedicationSchedule = function(){
            $location.url('/medicationView');
        }
    }
);