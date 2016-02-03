'use strict';

angular.module('myApp.recipesService', [])

.factory('RecipesService', function($location, $log, localStorageService, toastr, Recipes) {

    function login(params, hideLoading) {

    };

    return {
        login: login
    };
});