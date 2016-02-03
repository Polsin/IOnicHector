'use strict';

angular.module('myApp.inviteCaregiverCtrl', [])
.controller('InviteCaregiverCtrl', function($scope, $location, InviteCaregiverService, localStorageService, toastr) {

        $scope.data = {};

        $scope.userTypes = [
            {'lookupCode': 'AL', 'description': 'Care-giver'},
            {'lookupCode': 'FL', 'description': 'Patient'}
        ];

        $scope.loading = true;
        $scope.data.emails =[];

        var caregiversList;
        try {
            caregiversList = localStorageService.get('caregiversList');
            if(caregiversList){
                $scope.data.emails = caregiversList;
            }
        }
        catch(err) {}

        $scope.addUser = function () {

            if(!$scope.data.emailAddress){
                toastr.error('', 'Please enter a email address.');
            }else if(!validateEmail($scope.data.emailAddress)){
                toastr.error('', 'Please enter valid email address.');
            }else{

                var sessionData = localStorageService.get("sessionData");
                var patientID = localStorageService.get("patientID");
                $scope.data.emails.push($scope.data.emailAddress);
                $scope.data.emailAddress ="";

                /*InviteCaregiverService.addCareTaker({id:patientID,uid: sessionData.userId, email:$scope.data.emailAddress},
                function(res){
                    $scope.data.emails.push($scope.data.emailAddress);
                    $scope.data.emailAddress ="";
                });*/
            }



        };

        $scope.skipStep = function(){
            $location.url('/mapDevice');
        };

        $scope.gotoAddDevice = function(){
            localStorageService.set("caregiversList",  $scope.data.emails);
            if($scope.data.emails.length > 0){
                $location.url('/mapDevice');
            }else{
                toastr.error('', 'Please invite caretaker.');
            }
        };

        function validateEmail(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        }
    }
);