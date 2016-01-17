angular.module("jeviteca").directive("albumEntity", function () {
    return{
        restrict: "AE",
        replace: true,
        templateUrl: "views/EntityAlbum.html",
        scope: {
            album: "="
        },

        link: function(scope) {

            scope.rutaImagen = function() {
                return "img/" + scope.album.image;
            };
        }
    }
})
