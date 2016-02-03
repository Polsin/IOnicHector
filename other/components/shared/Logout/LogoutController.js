angular.module('myApp.logoutCtrl',[
    'ngMaterial'
]).controller('LogoutCtrl',
    function($scope ,$location, localStorageService) {


        $scope.logout = function () {
            $location.url('/login');


            //clear local storage
            localStorageService.clearAll();

            //call logout service

        };


    }

);
