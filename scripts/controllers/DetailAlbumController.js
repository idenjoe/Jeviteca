angular.module("jeviteca").controller("DetailCtrl", function($scope, $window, Album) {
    $scope.album = Album;

    $scope.rating = getCurrentRating();
    $scope.ratings = [{
        current: $scope.rating,
        max: 10
    }];

    function getCurrentRating() {
        var webStorageKey = $scope.album.id + "_" + "_rating";

        $scope.navegadorCompatible = function() {
            return typeof(Storage) !== "undefined";
        };

        var currentRating = localStorage.getItem(webStorageKey);
        if ( currentRating === null || currentRating == 0 ){
            return 1;
        }else {
            return currentRating;
        }
    }

    $scope.getSelectedRating = function (rating) {
        var webStorageKey = $scope.album.id + "_" + "_rating";
        $scope.navegadorCompatible = function() {
            return typeof(Storage) !== "undefined";
        };

        localStorage.setItem(webStorageKey,rating);
    }

    $scope.rutaImagen = function() {
        return "img/" + $scope.album.image;
    };

    $scope.linkWikipedia = function() {
        return "https://es.wikipedia.org/wiki/Special:Search?search=" + codificarPalabras($scope.album.band.name);
    };

    $scope.linkGoear = function(tema) {
        return "http://www.goear.com/search/" + codificarPalabras($scope.album.band.name, tema);
    };

    $scope.linkYouTube = function(tema) {
        return "https://www.youtube.com/results?search_query=" + codificarPalabras($scope.album.band.name, tema);
    };

    $scope.back = function() {
        $window.history.back();
    };

    function codificarPalabras() {
        var palabras = Array.prototype.slice.call(arguments).join(" ");
        palabras = palabras.toLowerCase();
        palabras = palabras.replace(/[^\w\s]/gi, " ");
        return encodeURIComponent(palabras);
    }
});
