'use strict';

angular.module('homepi.controllers', [])

.controller('AppCtrl', function($scope) {
  // Main app controller, empty for the example
})

.controller('DeviceListCtrl', function($scope, $state, $http , $rootScope, Socket) {

  $scope.devices = {};
  var topic='iot-2/cmd/bliste/fmt/json';

  

  $scope.logout = function() {
    console.log('Successfully logged out ' + window.localStorage['user']);
    window.localStorage.clear();
    $state.go('login');
  };
  var communicatorId='73';
  var messageId='11';
  var fsblId='24';
  var messageType='25';

  $scope.myFunction1=function(){
    var time=Date.now();
      var slot='1';
    var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction2=function(){
      var time=Date.now();
      var slot='2';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction3=function(){
      var time=Date.now();
      var slot='3';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction4=function(){
      var time=Date.now();
      var slot='4';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction5=function(){
      var time=Date.now();
      var slot='5';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };

    $scope.myFunction6=function(){
      var time=Date.now();
      var slot='6';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction7=function(){
      var time=Date.now();
      var slot='7';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction8=function(){
      var time=Date.now();
      var slot='8';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction9=function(){
      var time=Date.now();
      var slot='9';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction10=function(){
      var time=Date.now();
      var slot='10';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction11=function(){
      var time=Date.now();
      var slot='11';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction12=function(){
      var time=Date.now();
      var slot='12';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction13=function(){
      var time=Date.now();
      var slot='13';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction14=function(){
      var time=Date.now();
      var slot='14';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction15=function(){
      var time=Date.now();
      var slot='15';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction16=function(){
      var time=Date.now();
      var slot='16';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction17=function(){
      var time=Date.now();
      var slot='17';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction18=function(){
      var time=Date.now();
      var slot='18';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction19=function(){
      var time=Date.now();
      var slot='19';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction20=function(){
      var time=Date.now();
      var slot='20';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction21=function(){
      var time=Date.now();
      var slot='21';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction22=function(){
      var time=Date.now();
      var slot='22';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction23=function(){
      var time=Date.now();
      var slot='23';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction24=function(){
      var time=Date.now();
      var slot='24';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
      Socket.publish(topic ,payload);
  };
    $scope.myFunction26=function(){
      var time=Date.now();
      var slot='26';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction27=function(){
      var time=Date.now();
      var slot='27';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction28=function(){
      var time=Date.now();
      var slot='28';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction29=function(){
      var time=Date.now();
      var slot='29';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction30=function(){
      var time=Date.now();
      var slot='30';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction31=function(){
      var time=Date.now();
      var slot='31';
      var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
    $scope.myFunction32=function(){
      var time=Date.now();
    var slot='32';
    var payload = "{\"d\"{\"messageId\":"+messageId+",\"communicatorId\":"+communicatorId+",\"fsblId\":"+fsblId+",\"messageType\":"+messageType+",\"time\":"+time+",\"slotNumber\":"+slot+"}}";
     Socket.publish(topic ,payload);
  };
/*
  $scope.change = function (device) {
    console.log('changed: ' + device.id + ' value: ' + device.value);
    var payload = device.value;
    if(device.type == 'on_off' && (device.value == true || device.value == false)){
        payload = JSON.stringify(device.value);
    }
    Socket.publish(device.topic + '/set',payload);
  };
*/
  /*
  Socket.onMessage(function(topic, payload) {
    console.log('incoming topic: ' + topic + ' and payload: ' + payload);

    var splitTopic = topic.split("/");
    if(splitTopic[2] == 'config'){
        console.log('Load device configuration from MQTT...' + payload);
        $scope.devices = JSON.parse(payload);
    }
    
    angular.forEach($scope.devices, function(device) {
        //Search for corresponding device and update the value
        if(device.topic == topic){
          var isTrueSet = (payload === 'true');
          var isFalseSet = (payload === 'false');
          if(isTrueSet){
            device.value = true;
          }else if(isFalseSet){
            device.value = false;
          }else{
            device.value = payload;
          }
        }
    });

    $scope.$apply();
  });
*/
})

.controller('LoginCtrl', function($state, $scope, $rootScope, $http , $ionicPopup, Socket) {
  $scope.loginData = {};
  //var client1 = new Paho.MQTT.Client(".messaging.internetofthings.ibmcloud.com", 1883, "fdsf");
  $scope.showAlert = function() {
          $ionicPopup.alert({
            title: 'Error',
            content: 'User and/or password wrong!'
          }).then(function(res) {
            console.log('Alert showed...');
          });
        };

  $scope.tryLogin = function() {
    console.log('Try to log in ' + $scope.loginData.user);

    //check if username and passwors is not null
    if($scope.loginData.user && $scope.loginData.password ){
        //window.localStorage.setItem('host',$scope.loginData.host);
        //window.localStorage.setItem('port',$scope.loginData.port);
      var host ='6x53kd.internetofthings.ibmcloud.com'; //window.localStorage['host'];
      var port ='1883';//window.localStorage['port'];
      var orgId='6x53kd',deviceType='user',deviceId='1234', password='12344321';
     // window.localStorage.setItem('user',$scope.loginData.user);
    //  window.localStorage.setItem('password',$scope.loginData.password);
        //Socket.connect($scope.loginData.host,$scope.loginData.port,$scope.loginData.user,$scope.loginData.password);
      Socket.connect(host,port,orgId,deviceType,deviceId,password);
        console.log('Successfully logged in ' + $scope.loginData.user);
      $state.go('devices');

      //   console.log('Successfully Connected ' + $scope.loginData.user);
/*
      var loginRequest = {
        method: 'POST',
        url: 'https://hector-api-services-dev.mybluemix.net/api/auth',
        headers: {
          'Authorization': 'Basic aGVjdG9yUG9ydGFsOns0YWI4NDQwZC01YjVmLTQyZTktYTY4Ni0xNjM4ODYwZDA5ZDR9',
          'x-app-id': 'hectorPortal',
        },
        data: { 'email':'bill@ms.com','password':'aaa','usertype':'patient'
        }
      }

      $http(loginRequest).then(function(successResponse){
        //go to next page
        alert(successResponse);
        console.log(successResponse);
        //console.res(successResponse);

        //redirect
        $state.go('devices');



      }, function(res){
        //show error message
        alert("Authentification Error" + res);
        console.log(res);
        //console.res(res);
      });
      var deviceRequest = {
        method: 'POST',
        url: 'https://hector-api-services-dev.mybluemix.net/api/auth',
        headers: {
          'Authorization': 'Basic aGVjdG9yUG9ydGFsOns0YWI4NDQwZC01YjVmLTQyZTktYTY4Ni0xNjM4ODYwZDA5ZDR9',
          'x-app-id': 'hectorPortal',
        },
        data: { 'email':'bill@ms.com','password':'aaa','usertype':'patient'
        }
      }

      $http(loginRequest).then(function(successResponse){
        //go to next page
        alert(successResponse);
        console.log(successResponse);
        //console.res(successResponse);

        //redirect
        $state.go('devices');



      }, function(res){
        //show error message
        alert("Authentification Error" + res);
        console.log(res);
        //console.res(res);
      });*/

    }else {
      $scope.showAlert();
    }

  };

  $scope.logout = function() {
    console.log('Successfully logged out ' + window.localStorage['user']);
    window.localStorage.clear();
    $state.go('login');
  };
});
