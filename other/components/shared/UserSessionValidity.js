'use strict';

angular.module('myApp.userSessionValidity', [])

.factory('UserSessionValidity', function($location, $log, localStorageService) {

    var sessionData;

    function validSession() {
        if(localStorageService.isSupported) {
            sessionData = localStorageService.get('sessionData');
            if(!sessionData){
                $location.url('/login');
                return false;
            }
            else{
                return true;
            }
        }
    }

    function getUserDetails() {
        if(localStorageService.isSupported) {

            sessionData = localStorageService.get('sessionData');
            if(sessionData){
                return sessionData;
            }
            else{
                return null;
            }
        }
    }

    function setPageNavigation(navigation){
        if(navigation){
            localStorageService.set("isPageNavigation",  'pageNavigation');
        }
        else{
            localStorageService.set("isPageNavigation",  'not');
        }
    }

    function isPageNavigation(){
        var isPageNavigation = localStorageService.get('isPageNavigation');
        if(isPageNavigation === 'pageNavigation'){
            return true;
        }
        else{
            return false;
        }
    }

    return {
        validSession: validSession,
        getUserDetails: getUserDetails,
        setPageNavigation: setPageNavigation,
        isPageNavigation : isPageNavigation
    };
});
