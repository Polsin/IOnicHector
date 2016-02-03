/**
 * Created by inissanka
 * Date 11/02/15.
 */


'use strict';
angular.module('myApp.recipesCtrl', [])
.controller('RecipesCtrl', function ($scope, $log, $location, toastr) {
    $scope.data = {};
    $scope.showLoading = true;
    $scope.data.recipesList = [{"type":"facebook","ifImage":"img/Hector.png","thenImage":"img/facebook.jpeg","description":"Post daily medical adherence status to Facebook"},{"type":"alexa","ifImage":"img/Hector.png","thenImage":"img/alexa.png","description":"Post daily medical adherence status to Alexa"},{"type":"email","ifImage":"img/Hector.png","thenImage":"img/email.png","description":"Send daily medical adherence status via Email"}];


    $scope.applyRecipe = function(value){
        toastr.success('', 'Recipe configured : ' + value);
    }
});
