// Definición de la aplicación
angular.module("jeviteca", ["ngRoute", "route-segment", "view-segment"]);

angular.module("jeviteca").config(["$routeProvider","$routeSegmentProvider", function ($routeProvider,$routeSegmentProvider) {

    //Definimos los segments que vamos a necesitar
    $routeSegmentProvider.when("/albumes","albumes");
    $routeSegmentProvider.when("/bandas","bandas");
    $routeSegmentProvider.when("/generos","generos");
    $routeSegmentProvider.when("/albumes/:id/detalle","detailAlbum");
    $routeSegmentProvider.when("/bandas/:id/detalle","detailBand");

    //Definimos la navegación de cada segment

    //ÁLBUMES
    $routeSegmentProvider.segment("albumes",{
        controller: "AlbumsCtrl",
        templateUrl: "views/Albums.html",
        resolve: {
            Albums: ["AlbumsService", function(AlbumsService) {
                return AlbumsService.getData();
            }]
        }
    });

    //BANDAS
    $routeSegmentProvider.segment("bandas",{
        controller: "BandsCtrl",
        templateUrl: "views/Bands.html",
        resolve: {
            Bands: ["BandsService", function(BandsService) {
                return BandsService.getData();
            }]
        }
    });

    //GÉNEROS
    $routeSegmentProvider.segment("generos",{
        controller: "GenresCtrl",
        templateUrl: "views/Genres.html",
        resolve: {
            Genres: ["GenresService", function(GenresService) {
                return GenresService.getData();
            }]
        }
    });

    //DETALLE ÁLBUM
    $routeSegmentProvider.segment("detailAlbum",{
        controller: "DetailCtrl",
        templateUrl: "views/DetailAlbum.html",
        resolve: {
            Album: ["$routeParams","AlbumsService", function ($routeParams,AlbumsService) {
                return AlbumsService.getAlbumDetailData($routeParams.id);
            }]
        }
    });

    //DETALLE BANDAS
    $routeSegmentProvider.segment("detail_band", {
        controller: "DetailBandCtrl",
        templateUrl: "views/DetailBand.html",
        resolve: {
            Band: ["$routeParams", "BandsService", function($routeParams, BandsService) {
                return BandsService.getBandFromId($routeParams.id);
            }]
        }
    });




    // Redireccionamos por defecto a
    $routeProvider.otherwise({
        redirectTo: "/albumes"
    });
}]);
