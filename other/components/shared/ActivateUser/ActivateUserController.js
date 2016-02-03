/**
 * Created by kadesilva on 10/30/15.
 */


'use strict';

angular.module('myApp.activateUserCtrl', ['ngRoute'])
    .controller('ActivateUserCtrl', function($scope, $log, $routeParams, ActivateUserService) {

        $scope.messgae = "Activation Successful";
        $scope.myDynamicClass="label label-success center-block";
        $scope.myDynamicClass="label center-block label-default";
        $scope.activateUser = function () {

            ActivateUserService.activateUser($routeParams.activateKey);

        };
    }
);