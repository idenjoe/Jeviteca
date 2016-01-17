angular.module("jeviteca").controller("DetailBandCtrl", function ($scope, $window, Band) {
    $scope.band = Band;

    $scope.linkWikipedia = function() {
        return "https://es.wikipedia.org/wiki/Special:Search?search=" + $scope.band.name;
    };

    $scope.linkSingerWikipedia = function(singer){
        return "https://es.wikipedia.org/wiki/Special:Search?search=" + singer;
    };

    $scope.back = function() {
        $window.history.back();
    };
})
