/**
 * Created by inissanka.
 * Date 10/30/15
 */

'use strict';
angular.module('myApp.patientHomeCtrl', [])
.controller('PatientHomeCtrl', function ($scope, $log, LoginService, $location, UserSessionValidity, toastr, PatientHomeService, localStorageService, GetPatientDetails) {
    $scope.data = {};
    $scope.showLoading = true;
        $scope.showSettings = true;
        $scope.showUserIcon = true;
    $scope.isCollapsedMorning = false;
    $scope.isCollapsedNoon = true;
    $scope.isCollapsedEvening = true;
    $scope.isCollapsedBedtime = true;

        $scope.data.screenTitle = "Patient Portal";

    $scope.selectedDate = new Date(Date.now());
    var startDate = new Date(Date.now());
    startDate.setDate(startDate.getDate() - 15);
    var endDate = new Date(Date.now());
    endDate.setDate(endDate.getDate() + 20);

    Date.prototype.yyyymmdd = function() {
       var yyyy = this.getFullYear().toString();
       var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
       var dd  = this.getDate().toString();
       return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]); // padding
      };

    startDate = startDate.yyyymmdd();
    endDate = endDate.yyyymmdd();

    var userDetails = localStorageService.get('sessionData');

    GetPatientDetails.get({"patientId" : userDetails.userId}, function (userDetails) {
        $log.info(userDetails);
        $log.info('GetPatientDetails result : ' + JSON.stringify(userDetails));
        localStorageService.set('patientDetails', userDetails);
        $scope.userName = userDetails.firstName + ' ' + userDetails.lastName;

        $location.url('/patient');
    }, function (error) {
        $log.info('Error : ' + error);
        $log.info('Error Code : ' + error.data.code);
        $log.info('Error Message : ' + error.data.message);
        toastr.error('', 'Patient Details Retrieval Failed .');
        $scope.userName = 'Patient';
    });

        var sessionData = localStorageService.get("sessionData");
        $scope.data.userName = sessionData.userName;


    //$scope.data.patientAdherence = {"date":"2015-11-01","dailyAdherence":[{"slot":1,"time":"Morning","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":2,"time":"Noon","status":"scheduled","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":3,"time":"Evening","status":"scheduled","medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":4,"time":"Bedtime","status":"scheduled","medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]}]};

    $scope.collapsSection = function(viewSection){
        $scope.isCollapsedMorning = true;
        $scope.isCollapsedNoon = true;
        $scope.isCollapsedEvening = true;
        $scope.isCollapsedBedtime = true;

        if(viewSection === 'Morning'){
            $scope.isCollapsedMorning = false;
        }
        else if(viewSection === 'Noon'){
            $scope.isCollapsedNoon = false;
        }
        else if(viewSection === 'Evening'){
            $scope.isCollapsedEvening = false;
        }
        else if(viewSection === 'Bedtime'){
            $scope.isCollapsedBedtime = false;
        }

    };

    $scope.alertEventOnClick = function(date, jsEvent, view){
        $scope.data.patientAdherence = $scope.selectMedication(date);
        $scope.data.patientActivities = $scope.selectPatientActivities(date);
        $scope.data.patientNotifications = $scope.selectPatientNotifications(date);
        $scope.selectedDate = new Date(date);
        $log.info(date.format('YYYY-MM-DD'));
        $log.info(jsEvent);
        $log.info(view);
    };
    $scope.eventSources = [];
    $scope.uiConfig = {
        calendar:{
            selectable: true,
            editable: true,
            height: 500,
            header:{
                left: 'prev',
                center: 'title',
                right: 'next'
            },
            dayClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
        }
    };

    $scope.selectMedication = function(dateSelected){

        if(dateSelected && dateSelected._d){
            dateSelected = dateSelected._d;
        }
        if($scope.patientMedicationData && $scope.patientMedicationData.adherence && $scope.patientMedicationData.adherence.length > 0){
            var filtered = $scope.patientMedicationData.adherence.filter(function(x) {
                var date = new Date(x.date);
                if(date.getYear() === dateSelected.getYear() && date.getMonth() === dateSelected.getMonth() && date.getDate() === dateSelected.getDate()){
                    return x;
                }
            });
            if(filtered && filtered.length > 0){
                return filtered[0];
            }
        }
    };

    $scope.selectPatientActivities = function(dateSelected){
        if(dateSelected && dateSelected._d){
            dateSelected = dateSelected._d;
        }
        if($scope.patientActivityData && $scope.patientActivityData.dayActivities && $scope.patientActivityData.dayActivities.length > 0){
            var filtered = $scope.patientActivityData.dayActivities.filter(function(x) {
                var date = new Date(x.date);
                if(date.getYear() === dateSelected.getYear() && date.getMonth() === dateSelected.getMonth() && date.getDate() === dateSelected.getDate()){
                    return x;
                };
            });
            if(filtered && filtered.length > 0){
                return filtered[0];
            }
        };
    };

    $scope.selectPatientNotifications = function(dateSelected){
        if(dateSelected && dateSelected._d){
            dateSelected = dateSelected._d;
        }
        if($scope.patientNotificationsData && $scope.patientNotificationsData.dayNotifications && $scope.patientNotificationsData.dayNotifications.length > 0){
            var filtered = $scope.patientNotificationsData.dayNotifications.filter(function(x) {
                var date = new Date(x.date);
                if(date.getYear() === dateSelected.getYear() && date.getMonth() === dateSelected.getMonth() && date.getDate() === dateSelected.getDate()){
                    return x;
                }
            });
            if(filtered && filtered.length > 0){
                return filtered[0];
            }
        }
    };

    $scope.setEventDataOnCalender = function(){
        var eventsData = [];
        $scope.patientMedicationData.adherence.filter(function(x) {
            if(x.compliance === true){
                eventsData.push({"title": "","start": x.date, "color": '#00C100'});
            }
            else if(x.compliance === false){
                eventsData.push({"title": "","start": x.date, "color": '#FF3333'});
            }else{
                eventsData.push({"title": "","start": x.date, "color": '#95a0aa'});
            }
        });
        return eventsData;
    };

    PatientHomeService.getData({"patientId":userDetails.userId, "startDate":startDate, "endDate":endDate}, function(result){
        $scope.patientMedicationData = result;
        $scope.data.patientAdherence = $scope.selectMedication($scope.selectedDate);
        //$scope.data.patientAdherence = result;
        $scope.uiConfig.calendar.events = $scope.setEventDataOnCalender();
        $scope.viewAdherenceDetails = true;
        $scope.showLoading = false;
    });

    PatientHomeService.getPatientActivities({"patientId":userDetails.userId, "startDate":startDate, "endDate":endDate}, function(result){
        $scope.showLoading = true;
        $scope.patientActivityData = result;
        $scope.data.patientActivities = $scope.selectPatientActivities($scope.selectedDate);
        //$scope.data.patientActivities = result;

        $scope.showLoading = false;
    });

    PatientHomeService.getPatientNotifications({"patientId":userDetails.userId, "startDate":startDate, "endDate":endDate}, function(result){
        $scope.showLoading = true;
        $scope.patientNotificationsData = result;
        $scope.data.patientNotifications = $scope.selectPatientNotifications($scope.selectedDate);
        //$scope.data.patientNotifications = result;

        $scope.showLoading = false;
    });

    $scope.showDetails = function(section){

        if(section === 'adherence'){
            $scope.viewAdherenceDetails = true;
            $scope.viewActivityDetails = false;
            $scope.viewAlertDetails = false;
            $log.info(section);
        }
        else if(section === 'activities'){
            $scope.viewAdherenceDetails = false;
            $scope.viewActivityDetails = true;
            $scope.viewAlertDetails = false;
            $log.info(section);
        }
        else if(section === 'alerts'){
            $scope.viewAdherenceDetails = false;
            $scope.viewActivityDetails = false;
            $scope.viewAlertDetails = true;
            $log.info(section);
        }
    };

});
