/**
 * Created by inissanka
 * Date 11/02/15.
 */
'use strict';
angular.module('myApp.medicationViewCtrl', [])
.controller('MedicationViewCtrl', function($scope, $log, MedicationViewService, $location, localStorageService, UserSessionValidity, InviteCaregiverService, MapDeviceService, EmailCaregiver, toastr) {

    $scope.data = {};
    $scope.showLoading = true;
    //$scope.patientDetails
    var patDetails;
    var patientCaregiversList;
    var patientDevices;

    /*try {
        var patDetails = localStorageService.get('patientDetailSearchData');
        $scope.viewPatientDetail = true;
        var patientCaregiversList = localStorageService.get('caregiversList');
        $scope.viewPatientCaregiversList = true;
        var patientDevices = localStorageService.get('addedDeviceListToPatient');
        $scope.viewPatientDeviceList = true;
    }
    catch(err) {}
    $scope.patientMedicationDetails = { patientDetails : patDetails, patientCaregiversList : patientCaregiversList, patientDevices : patientDevices};
*/

    var patientDetails = localStorageService.get('patientDetails');
    $scope.patientName = patientDetails.patientName;
    MedicationViewService.search({patientId : patientDetails.patientID, medicationId : 'active'}, function(result){
        $scope.data = result;
        $scope.showLoading = false;
    });


    $scope.gotoHomePage = function(){
        $location.url('/pharmacistHome');
    }

    $scope.submit = function(){
        var sessionData = localStorageService.get("sessionData");

        if(patientCaregiversList){
            patientCaregiversList.forEach(function(emailAddress){
                InviteCaregiverService.addCareTaker({ id: patDetails.patientId, uid : sessionData.userId, email : emailAddress},
                function(res){
                });
            });
        }
        if(patientDevices){
            patientDevices.forEach(function(deviceDetail){
                var deviceType;
                if(deviceDetail.deviceType === 'blister-pack'){
                    deviceType = 'fsbl';
                }
                else{
                    deviceType = deviceDetail.deviceType;
                }
                MapDeviceService.mapDevice({
                    id: patDetails.patientId,
                    uid: sessionData.userId,
                    "deviceType": deviceType,
                    "macAddress": deviceDetail.macAddress
                },function(){
                });
            });
        }
        if(!patDetails.isRegistered){
            EmailCaregiver.save({email:patDetails.email}, function (response) {
                //TODO
                // add tost message
                toastr.success('', 'Patient Invitation Email Sent.');
                $log.info(response);
            }, function (res) {
                toastr.error('', 'Patient Invitation Email Failed.');
                $log.info('Error Code : ' + res.data.code);
                $log.info('Error Message : ' + res.data.message);
            });

        }

        localStorageService.set("previousSessionData",  $scope.patientMedicationDetails);
        localStorageService.set("patientDetailSearchData",  null);
        localStorageService.set("caregiversList",  null);
        localStorageService.set("addedDeviceListToPatient",  null);
        $location.url('/pharmacist');
    }

    //$scope.patientName = "Rechard, Betty";
    //$scope.data = {"patientName":"Rechard, Betty","patientId":"pat1","fileNumber":12,"date":"2015-11-02","blisters":[{"_id":"blister1","slot":1,"date":"2015-11-01","time":"morning","medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister2","slot":2,"date":"2015-11-01","time":"noon","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","slot":3,"date":"2015-11-01","time":"evening","medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","slot":4,"date":"2015-11-01","time":"bedtime","medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister1","slot":5,"date":"2015-11-02","time":"morning","medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister2","slot":6,"date":"2015-11-02","time":"noon","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","slot":7,"date":"2015-11-02","time":"evening","medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","slot":8,"date":"2015-11-02","time":"bedtime","medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister1","slot":9,"date":"2015-11-03","time":"morning","medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister2","slot":10,"date":"2015-11-03","time":"noon","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","slot":11,"date":"2015-11-03","time":"evening","medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","slot":12,"date":"2015-11-03","time":"bedtime","medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister1","slot":13,"date":"2015-11-04","time":"morning","medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister2","slot":14,"date":"2015-11-04","time":"noon","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","slot":15,"date":"2015-11-04","time":"evening","medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","slot":16,"date":"2015-11-04","time":"bedtime","medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]}]};
    //$scope.data = {"patientId":"pat1","fileNumber":12,"blisters":[{"_id":"blister1","slot":1,"date":"2015-11-01","time":"Morning","medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister2","slot":2,"date":"2015-11-01","time":"Noon","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","slot":3,"date":"2015-11-01","time":"Evening","medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]}]};
});
