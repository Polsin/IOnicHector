/**
 * Created by inissanka.
 * Date 10/30/15
 */

 'use strict';

angular.module('myApp.patientHomeService', [])

.factory('PatientHomeService', function($location, $log, Login, localStorageService, toastr, PatientHome, PatientActivities, PatientNotifications, GetCaregiversList) {

    function getData(params, uiFunction) {
        PatientHome.get(params, function (successResponse) {
            //$log.info(successResponse);
            //$log.info('PatientHome result : ' + JSON.stringify(successResponse));
            uiFunction( successResponse);

        }, function (res) {
            if(res.status === 401){
                $location.url('/login');
                toastr.warning('', 'Invalid session token, Please Re-Login.');
            }
        });
        //var result = {"adherence":[{"date":"2015-11-01","dailyAdherence":[{"slot":1,"time":"Morning","status":"consumed","adherenceLevel":"missed","medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":2,"time":"Noon","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":3,"time":"Evening","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":4,"time":"Bedtime","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]}],"compliance":false},{"date":"2015-11-02","dailyAdherence":[{"slot":5,"time":"Morning","status":"scheduled","adherenceLevel":"missed","medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":6,"time":"Noon","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":7,"time":"Evening","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":8,"time":"Bedtime","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]}],"compliance":false},{"date":"2015-11-03","dailyAdherence":[{"slot":9,"time":"Morning","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":10,"time":"Noon","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":11,"time":"Evening","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":12,"time":"Bedtime","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]}],"compliance":true},{"date":"2015-11-04","dailyAdherence":[{"slot":13,"time":"Morning","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":14,"time":"Noon","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":15,"time":"Evening","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":16,"time":"Bedtime","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]}],"compliance":true},{"date":"2015-11-05","dailyAdherence":[{"slot":17,"time":"Morning","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":18,"time":"Noon","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":19,"medications":[]},{"slot":20,"time":"Bedtime","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]}],"compliance":true},{"date":"2015-11-06","dailyAdherence":[{"slot":21,"time":"Morning","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":22,"time":"Noon","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"slot":23,"medications":[]},{"slot":24,"time":"Bedtime","status":"consumed","adherenceLevel":"ontime","medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]}],"compliance":false}]};
        //uiFunction(result);
    }

    function getPatientActivities(params, uiFunction){
        PatientActivities.get(params, function (successResponse) {
            uiFunction( successResponse, params.patientId);
            //$log.info(successResponse);
            //$log.info('Patient activities result : ' + JSON.stringify(successResponse));
        }, function (res) {
            if(res.status === 401){
                $location.url('/login');
            }
        });
        //var result = {"dayActivities":[{"date":"2015-11-16","activities":[{"type":"medication-consumed","time":"09:01:00","message":"The medication in Blister 1 was consumed 1","level":"info"},{"type":"medication-missed","time":"19:01:00","message":"Evening medication missed","level":"warning"}]},{"date":"2015-11-17","activities":[{"type":"medication-consumed","time":"09:01:00","message":"The medication in Blister 1 was consumed 2","level":"info"},{"type":"medication-missed","time":"19:01:00","message":"Evening medication missed","level":"warning"}]},{"date":"2015-11-18","activities":[{"type":"medication-consumed","time":"09:01:00","message":"The medication in Blister 1 was consumed 3","level":"info"},{"type":"medication-missed","time":"19:01:00","message":"Evening medication missed","level":"warning"}]},{"date":"2015-11-19","activities":[{"type":"medication-consumed","time":"09:01:00","message":"The medication in Blister 1 was consumed 4","level":"info"},{"type":"medication-missed","time":"19:01:00","message":"Evening medication missed","level":"warning"}]},{"date":"2015-11-20","activities":[{"type":"medication-consumed","time":"09:01:00","message":"The medication in Blister 1 was consumed 5","level":"info"},{"type":"medication-missed","time":"19:01:00","message":"Evening medication missed","level":"warning"}]}]};
        //uiFunction(result);
    }

    function getPatientNotifications(params, uiFunction){
        PatientNotifications.get(params, function (successResponse) {
            uiFunction( successResponse);
            //$log.info(successResponse);
            //$log.info('Patient notification result : ' + JSON.stringify(successResponse));

        }, function (res) {
            if(res.status === 401){
                $location.url('/login');
            }
        });
        //var result = {"dayNotifications":[{"date":"2015-11-16","notifications":[{"type":"medication-consumed","time":"09:01:00","message":"Alert 1","level":"info"},{"type":"medication-missed","time":"19:01:00","message":"Alert","level":"warning"}]},{"date":"2015-11-17","notifications":[{"type":"medication-consumed","time":"09:01:00","message":"Alert consumed 2","level":"info"},{"type":"medication-missed","time":"19:01:00","message":"Evening medication missed","level":"warning"}]},{"date":"2015-11-18","notifications":[{"type":"medication-consumed","time":"09:01:00","message":"Alert consumed 3","level":"info"},{"type":"medication-missed","time":"19:01:00","message":"Evening medication missed","level":"warning"}]},{"date":"2015-11-19","notifications":[{"type":"medication-consumed","time":"09:01:00","message":"Alert consumed 4","level":"info"},{"type":"medication-missed","time":"19:01:00","message":"Evening medication missed","level":"warning"}]},{"date":"2015-11-20","notifications":[{"type":"medication-consumed","time":"09:01:00","message":"Alert consumed 5","level":"info"},{"type":"medication-missed","time":"19:01:00","message":"Evening medication missed","level":"warning"}]}]};
        //uiFunction(result);
    }

    function getCaregiversList(params, uiFunction){

        GetCaregiversList.get(params, function (successResponse) {
            uiFunction( successResponse);
            //$log.info(successResponse);
            //$log.info('Patient activities result : ' + JSON.stringify(successResponse));


        }, function (res) {
            if(res.status === 401){
                $location.url('/login');
            }
        });

        //var result = [{"userId":"b79a9e1f05e7a64549cac71d3fd88590","email":"000nissanka@cc.com"},{"userId":"6d592faf2ddd61bc16bcd4d6d49c733e","email":"000nissanka@gmail.com"},{"userId":"46ac92848fc2a825cdfcdbe0e5150d9a","email":"000nissanka@gmail.com"},{"userId":"b79a9e1f05e7a64549cac71d3faa9f27","email":"000nissanka@gmail.com"},{"userId":"274948061924db96d9798a374653181c","email":"a@a.com"},{"userId":"caretaker","email":"caretaker@a.com","firstName":"Ion","lastName":"Nissanka","gender":"male","address":{"streetName":"181, Colombo Rd","city":"Divulpitiya, Boralesgamuwa","state":"Idaho","zipCode":"CO10290","country":"US"},"dateOfBirth":"1988-08-01","phoneNo":"+94719439733","userType":"caretaker"},{"userId":"3b5f1900c6eb34c1ae7b30ca6ade1969","email":"sktragu@gmail.com"},{"userId":"e857b37fadcf0204eee414eaa5637268","email":"sktragu1@gmail.com"}];
        //uiFunction(result);
    }

    return {
        getData: getData,
        getPatientActivities: getPatientActivities,
        getPatientNotifications: getPatientNotifications,
        getCaregiversList : getCaregiversList
    };
});