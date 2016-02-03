'use strict';

angular.module('myApp.patientRegistrationCtrl', [])

    .controller('PatientRegistrationCtrl', function($scope, $log, PatientRegistrationService, $location) {

        $scope.data = {};

        $scope.data.screenTitle = "Registration";

        var queryParams = $location.search();

        var userType, userID;

            if(queryParams.type){
                userType = queryParams.type.toLowerCase();
            }

        if(queryParams.activation){

            PatientRegistrationService.getDetails({activationKey : queryParams.activation},function(res){
                $scope.data.email = res.email;
                $scope.data.fname = res.firstName;
                $scope.data.lname = res.lastName;
                $scope.data.gender = res.gender;
                $scope.data.stName = res.address.streetName;
                $scope.data.city = res.address.city;
                $scope.data.zip =  res.address.zipCode;
                $scope.data.state = res.address.state;
                $scope.data.country = res.address.country;
                $scope.data.phone = res.phoneNo;
                $scope.data.dob = res.dob;
                userType = res.userType;
                userID = res.id;



            });
        }



        if(queryParams.type === 'pharmacist'){
            $scope.userType = 'Pharmacist';
        }
        else if(queryParams.type === 'patient'){
            $scope.userType = 'Patient';
        }
        else if(queryParams.type === 'caretaker'){
            $scope.userType = 'Caretaker';
        }
        else if(queryParams.type === 'hardwarevendor'){
            $scope.userType = 'Hardware Vendor';
        }

        $scope.register = function () {

            if($scope.data.password === $scope.data.passwordConfirm){

                var patientObj = {
                    "email" :  $scope.data.email,
                    "password" : $scope.data.password,
                    "firstName" :  $scope.data.fname,
                    "lastName" : $scope.data.lname,
                    "gender" :  $scope.data.gender,
                    "dateOfBirth" : $scope.data.dob,
                    "address" : {
                        "streetName" : $scope.data.stName,
                        "city" : $scope.data.city,
                        "zipCode" : $scope.data.zip,
                        "country" : $scope.data.country
                    },
                    "phoneNo" : $scope.data.phone,
                    "userType" : userType
                };

                $log.info(patientObj);
                if(queryParams.activation){
                    patientObj.activationKey = queryParams.activation;
                    patientObj.id =  userID;
                    PatientRegistrationService.registerWithKey(patientObj);
                }else{
                    PatientRegistrationService.register(patientObj);
                }

            }else{

                alert("Password not match.");

            }

        };

    });

