angular.module("jeviteca").directive("genreEntity", function () {
    return{
        restrict: "AE",
        replace: true,
        templateUrl: "views/EntityGenre.html",
        scope: {
            genre: "="
        }
    }
})