'use strict';
angular.module('myApp.settingsService', [])
    .factory('SettingsService', function($location, $log, Settings) {


        function saveSettings(params){

            Settings.save(params, function (successResponse) {
                $log.info(successResponse);

            }, function (res) {
                $log.info('Error Code : ' + res.data.code);
                $log.info('Error Message : ' + res.data.message);
                //return {success : false, errorCode : res.data.code, message : res.data.message};
            });
        }


        function getSettings(params, updateUI) {

            Settings.get(params, function (successResponse) {
                $log.info(successResponse);
                updateUI(successResponse);
            }, function (res) {
                $log.info('Error Code : ' + res.data.code);
                $log.info('Error Message : ' + res.data.message);
                //return {success : false, errorCode : res.data.code, message : res.data.message};
            });
        }

        return {
            getSettings: getSettings,
            saveSettings: saveSettings
        };
    });