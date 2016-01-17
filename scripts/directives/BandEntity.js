angular.module("jeviteca").directive("bandEntity", function () {
    return{
        restrict: "AE",
        replace: true,
        templateUrl: "views/EntityBand.html",
        scope: {
            band: "="
        }
    }
})