angular.module('myApp.settingsCtrl',[
    'ngMaterial','ngAria', 'ngAnimate'
],function($mdThemingProvider) {
    var blueTheme = $mdThemingProvider.theme('blueTheme', 'default');
    var bluePalette = $mdThemingProvider.extendPalette('blue', {
        '500': '#30B5Ef'
    });
    $mdThemingProvider.definePalette('bluePalette', bluePalette);
    blueTheme.primaryPalette('bluePalette');
}).controller('SettingsCtrl',
    function($scope, $http , $interval , SettingsService , localStorageService) {

        $scope.settings = [{
            id:"setting1" , name : "Push" , value : false , disabled : true},
            { id:"setting2" , name: "SMS" , value : false , disabled : true},
            { id:"setting3" , name: "Email" , value : false , disabled : true
            }];


        $scope.getSettings = function(){

            //way 1
            var sessionData = localStorageService.get('sessionData');
            var params = { id:sessionData.userId};

            SettingsService.getSettings(params , function(response){

                if(response['push'] === true){
                    $scope.settings[0].value = true;
                }
                if(response['email'] === true){
                    $scope.settings[1].value = true;
                }
                if(response['sms'] === true){
                    $scope.settings[2].value = true;
                }

                //enable switch buttons
                $scope.settings[0].disabled = false;
                $scope.settings[1].disabled = false;
                $scope.settings[2].disabled = false;

            });


        };

        $scope.updateSettings = function(setting ,value , event){

            var sessionData = localStorageService.get('sessionData');

            var params = {
                id:sessionData.userId,
                push: $scope.settings[0].value,
                sms: $scope.settings[1].value,
                email: $scope.settings[2].value
            };

            SettingsService.saveSettings(params);

        };

    }

);
