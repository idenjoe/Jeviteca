
angular.module("jeviteca").directive("searchFilter", function() {

        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/SearchFilter.html",
            scope: {
                ngModel: "="
            }
        };
    });
