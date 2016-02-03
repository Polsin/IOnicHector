'use strict';

angular.module('myApp.loginService', [])

.factory('LoginService', function($location, $log, Login, localStorageService, toastr) {

    function login(params, hideLoading) {

        var requestData = {email : params.emailAddress, password : params.password};

        Login.save(requestData, function (successResponse) {

            hideLoading();
            $log.info('User Type :' + successResponse.userType);
            $log.info('User Token :' + successResponse.token);



            if(params.rememberMe){

                localStorageService.set('sessionData', {token : successResponse.token, userType : successResponse.userType, userId : successResponse.userId, patientID : successResponse.patientId , userName : successResponse.firstName, userEmailAddress : params.emailAddress, password : params.password, rememberMe : true});

                /*if(successResponse.userType === 'patient'){
                    localStorageService.set('sessionData', {token : successResponse.token, userType : successResponse.userType, userId : successResponse.patientId, userName : successResponse.firstName, userEmailAddress : params.emailAddress, password : params.password, rememberMe : true});
                }else{
                    localStorageService.set('sessionData', {token : successResponse.token, userType : successResponse.userType, userId : successResponse.userId, userName : successResponse.firstName, userEmailAddress : params.emailAddress, password : params.password, rememberMe : true});
                }*/
            }
            else{

                localStorageService.set('sessionData', {token : successResponse.token, userType : successResponse.userType, userId : successResponse.userId, patientID : successResponse.patientId , userName : successResponse.firstName, userEmailAddress : params.emailAddress, password : params.password, rememberMe : true});


               /* if(successResponse.userType === 'patient'){
                    localStorageService.set('sessionData', {token : successResponse.token, userType : successResponse.userType, userName : successResponse.firstName, userId : successResponse.patientId, rememberMe : false});
                }else{
                    localStorageService.set('sessionData', {token : successResponse.token, userType : successResponse.userType, userName : successResponse.firstName, userId : successResponse.userId, rememberMe : false});
                }*/

            }


            if(successResponse.userType === 'pharmacist'){
                $location.url('/pharmacist');
            }
            else if(successResponse.userType === 'patient'){
                $location.url('/patient');
                /*GetPatientDetails.get({"patientId" : successResponse.userId}, function (userDetails) {
                    $log.info(userDetails);
                    $log.info('GetPatientDetails result : ' + JSON.stringify(userDetails));
                    localStorageService.set('patientDetails', userDetails);
                    $location.url('/patient');
                }, function (error) {
                    $log.info('Error : ' + error);
                    $log.info('Error Code : ' + error.data.code);
                    $log.info('Error Message : ' + error.data.message);
                    toastr.error('', 'Patient Details Retrieval Failed .');
                });*/

            }
            else if(successResponse.userType === 'caretaker'){
                $location.url('/caregiver');
            }
            else if(successResponse.userType === 'hardwarevendor'){
                $location.url('/vendor');
            }

            //return {success : true, userType: successResponse.userType};
        }, function (res) {
            hideLoading();
            //$log.info('Error Code : ' + res.data.code);
            //$log.info('Error Message : ' + res.data.message);

            if(res.status === -1){
                toastr.error('', 'Unable to reach server.');
            }
            if(res.data.code === 'E1004'){
                toastr.error('', 'Invalid Email Address or Password.');
            }

            localStorageService.set('sessionData', null);
            //return {success : false, errorCode : res.data.code, message : res.data.message};
        });
    };

    return {
        login: login
    };
});