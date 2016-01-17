angular.module("jeviteca").controller("GenresCtrl", function($scope, Genres) {
    $scope.genres = Genres.data;
});