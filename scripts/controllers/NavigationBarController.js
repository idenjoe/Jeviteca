angular.module("jeviteca").controller("NavigationBarCtrl", function ($scope, $routeSegment) {

    // Comprobamos si la ruta navegada es "/albumes".
    $scope.routeIsAlbums = function() {
        return $routeSegment.startsWith("albumes");
    };

    // Comprobamos si la ruta navegada es "/bandas".
    $scope.routeIsBands = function() {

        return $routeSegment.startsWith("bandas");
    };

    // Comprobamos si la ruta navegada es "/generos".
    $scope.routeIsGenres = function() {

        return $routeSegment.startsWith("generos");
    };

})
