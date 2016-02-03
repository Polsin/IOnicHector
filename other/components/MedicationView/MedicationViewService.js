/**
 * Created by inissanka on 10/29/15.
 */

'use strict';
angular.module('myApp.medicationViewService', [])
.factory('MedicationViewService', function($location, $log, MedicationView, toastr) {

    function search(params, updateUI) {
        MedicationView.get(params, function (successResponse) {
            $log.info(successResponse);
            updateUI(successResponse);
            //successResponse = [{"date":"2015-11-01", "blisters" :[{"_id":"blister1","time":"morning","slot":1,"medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister2","time":"noon","slot":1,"medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","time":"evening","slot":1,"medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister4","time":"bedtime","slot":1,"medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]}]},{"date":"2015-11-02", "blisters" :[{"_id":"blister1","time":"morning","slot":1,"medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister2","time":"noon","slot":1,"medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","time":"evening","slot":1,"medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister4","time":"bedtime","slot":1,"medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]}]},{"date":"2015-11-03", "blisters" :[{"_id":"blister1","time":"morning","slot":1,"medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister2","time":"noon","slot":1,"medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","time":"evening","slot":1,"medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister4","time":"bedtime","slot":1,"medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]}]},{"date":"2015-11-04", "blisters" :[{"_id":"blister1","time":"morning","slot":1,"medications":[{"id":"para001","drug":"fosomax 70 mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister2","time":"noon","slot":1,"medications":[{"id":"hydroxyzine1","drug":"hydroxyzine hcl 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"altace001","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"novamoxin001","drug":"novamoxin 500mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister3","time":"evening","slot":1,"medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]},{"_id":"blister4","time":"bedtime","slot":1,"medications":[{"id":"altace002","drug":"altace 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"lipitor001","drug":"lipitor 10mg","quantity":1,"description":"Normal medication for headaches"},{"id":"naproxen001","drug":"naproxen 250mg","quantity":1,"description":"Normal medication for headaches"}]}]}];

            /*var result = [];
            $log.info('Medication result : ' + JSON.stringify(successResponse));
            successResponse.forEach(function(entry) {
                var blisters = [];
                entry.blisters.forEach(function(blister) {
                    var medications = [];
                    blister.medications.forEach(function(medication) {
                        medications.push({ "drug" : medication.drug, "quantity" : medication.quantity, "description" : medication.description});
                    });
                    result.push({ "time" : blister.time, "slot" : blister.slot, "medications" : medications});
                });
                result.push({ "date" : entry.date, "blisters" : blisters});
            });
            updateUI(result);*/

        }, function (res) {
            $log.info('Error : ' + res);
            $log.info('Error Code : ' + res.data.code);
            $log.info('Error Message : ' + res.data.message);
            if(res.data.code === 'E5001'){
                toastr.error('', 'Error while retrieving active medication.');
            }
            //return {success : false, errorCode : res.data.code, message : res.data.message};
        });
    }

    return {
        search: search
    };
});