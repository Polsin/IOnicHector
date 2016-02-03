'use strict';
angular.module('myApp.loginCtrl', ['ngInput'])
    .controller('LoginCtrl', function ($scope, $log, LoginService, $location, UserSessionValidity, toastr) {
        $scope.data = {};
        $scope.showLoading = false;

        $scope.states = {};
        $scope.states.activeItem = 'item1';
        $scope.menuItems = [{
            id: 'item1',
            title: 'Patient'
        }, {
            id: 'item2',
            title: 'Caregiver'
        }, {
            id: 'item3',
            title: 'Pharmacist'
        }, {
            user: 'item4',
            title: 'Vendor'
        }];

        //Set default user
        $scope.loginButtonText = "Login as " + $scope.menuItems[0].title;

        var loginDetails = UserSessionValidity.getUserDetails();
        if (loginDetails && loginDetails.rememberMe) {
            $scope.data.rememberMe = true;
            if (loginDetails.userEmailAddress && loginDetails.password) {
                $scope.data.emailAddress = loginDetails.userEmailAddress;
                $scope.data.password = loginDetails.password;

            }
        }


        $scope.updateSubmitButton = function(user){
            $scope.loginButtonText = "Login as " + user;
        }


        $scope.login = function () {
            if (validLogin()) {
                var params = {
                    emailAddress: $scope.data.emailAddress,
                    password: $scope.data.password,
                    rememberMe: $scope.data.rememberMe
                };
                $scope.showLoading = true;
                LoginService.login(params,function(){
                    $scope.showLoading = false;
                });
            }
        };

        $scope.register = function () {
            $location.url('/register?type=hardwarevendor');
        };

        function validLogin() {
            var validPost = true;

            if (!$scope.data.emailAddress) {
                validPost = false;
                toastr.error('', 'Email Address Required.');
            }
            else if (!validateEmail($scope.data.emailAddress)) {
                validPost = false;
                toastr.error('', 'Invalid Email Address.');
            }

            if (!$scope.data.password) {
                validPost = false;
                toastr.error('', 'Password Required.');
            }

            return validPost;
        }

        function validateEmail(email) {
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        }
    });
