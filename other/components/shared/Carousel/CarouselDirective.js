/**
 * Created by kadesilva on 11/12/15.
 */


angular.module('myApp').directive("owlCarousel", function() {
    return {
        restrict: 'E',
        transclude: false,
        link: function (scope) {
            scope.initCarousel = function(element) {
                // provide any default options you want
                var defaultOptions = {
                    items : 3,
                    itemsCustom : true,
                    itemsDesktop : [1199,3],
                    itemsDesktopSmall : [980,3],
                    itemsTablet: [768,4],
                    itemsTabletSmall: false,
                    itemsMobile : [479,1],
                    singleItem : false,
                    itemsScaleUp : true,
                    responsive : false
                };
                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for(var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
                // init carousel
                $(element).owlCarousel(defaultOptions);
            };
        }
    };
})
    .directive('owlCarouselItem', [function() {
        return {
            restrict: 'A',
            transclude: false,
            link: function(scope, element) {
                // wait for the last item in the ng-repeat then call init
                if(scope.$last) {
                    scope.initCarousel(element.parent());
                }
            }
        };
    }]);