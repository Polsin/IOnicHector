'use strict';

angular.module('myApp.devices', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/devices', {
    templateUrl: 'components/Devices/devices.html',
    controller: 'DevicesCtrl'
  });
}])

.controller('DevicesCtrl', ['$scope', '$log',
    function($scope, $log) {

        $scope.items = [{macAddress : 'HL4D9E',type:"Communicator", assignTo : 'John Doe', lastPing : '15-Oct-2015'},
            {macAddress : 'KQ97E3',type:"Communicator", assignTo : 'Mark Fdo', lastPing : '15-Oct-2015'},
            {macAddress : 'Q1PC5N',type:"Communicator", assignTo : 'Shon Paul', lastPing : '15-Oct-2015'},
            {macAddress : '7CKD6W',type:"Communicator", assignTo : 'Lora Smith', lastPing : '15-Oct-2015'},
            {macAddress : 'KQ97E3',type:"Communicator", assignTo : 'Mark Fdo', lastPing : '15-Oct-2015'},
            {macAddress : 'Q1PC5N',type:"Communicator", assignTo : 'Shon Paul', lastPing : '15-Oct-2015'},
            {macAddress : '7CKD6W',type:"Communicator", assignTo : 'Lora Smith', lastPing : '15-Oct-2015'},
            {macAddress : 'KQ97E3',type:"Communicator", assignTo : 'Mark Fdo', lastPing : '15-Oct-2015'},
            {macAddress : 'Q1PC5N',type:"Communicator", assignTo : 'Shon Paul', lastPing : '15-Oct-2015'},
            {macAddress : '7CKD6W',type:"Communicator", assignTo : 'Lora Smith', lastPing : '15-Oct-2015'},
            {macAddress : '9CJTY2',type:"Communicator", assignTo : 'Kasun De', lastPing : '15-Oct-2015'}];


        $scope.deviceSearch = function () {
            $log.info("Date :" + $scope.data.selectedDate);

        };



    }
]);