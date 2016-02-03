/**
 * Created by kadesilva on 10/29/15.
 */


'use strict';

angular.module('myApp.inviteCaregiverService', [])

    .factory('InviteCaregiverService', function($log, InviteCaregiver, EmailCaregiver, toastr) {

        function addCareTaker(params, updateUI) {

            InviteCaregiver.save(params, function (successResponse) {
                $log.info(successResponse);

                updateUI(successResponse);
                // invite by email
                if(successResponse.invite){

                    EmailCaregiver.save({"email":params.email}, function (response) {
                        $log.info(response);
                        toastr.success('', 'Invitation emailed to the caregiver.');
                    }, function (res) {
                        $log.info('Error Code : ' + res.data.code);
                        $log.info('Error Message : ' + res.data.message);
                    });
                }

            }, function (res) {
                $log.info(res);
                toastr.error('', 'Caretaker invitation failed.');
            });

        };

        return {
            addCareTaker: addCareTaker
        };
    });
