/**
 * Created by kadesilva on 10/28/15.
 */

'use strict';
angular.module('myApp.HttpRequestSer', [])
.factory('HttpRequest', function ($http) {
    return {
        get: function (url) {
            return $http.get(url);
        }
    };
});