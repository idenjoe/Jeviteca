angular.module("jeviteca").controller("BandsCtrl", function($scope, Bands) {
    $scope.bands = Bands.data;
});
