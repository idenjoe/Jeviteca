angular.module("jeviteca").directive("favorites", function() {

        return {
            restrict: "AE",
            replace: true,
            templateUrl: "views/Favorites.html",
            scope: {
                id: "=",
                tipo: "@"
            },
            link: function(scope) {

                var webStorageKey = scope.tipo + "_" + scope.id + "_fav";

                scope.navegadorCompatible = function() {
                    return typeof(Storage) !== "undefined";
                };

                scope.esFavorito = function() {
                    return localStorage.getItem(webStorageKey) == "true";
                };

                scope.cambiarSeleccion = function() {
                    scope.esFavorito() ? localStorage.removeItem(webStorageKey) : localStorage.setItem(webStorageKey, "true");
                };
            }
        };
    });